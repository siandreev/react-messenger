import React from "react";
import windowActions from "./action";
import {connect} from "react-redux";
import { Redirect }  from 'react-router-dom';
import WebSocketAsPromised from "websocket-as-promised";
import {Window} from "components";

class WindowModule extends React.Component {
    constructor(props) {
        super(props);

        const wsp = new WebSocketAsPromised("ws://localhost:8001", {
            packMessage: data => JSON.stringify(data),
            unpackMessage: data => JSON.parse(data),
            attachRequestId: (data, requestId) => Object.assign({id: requestId}, data),
            extractRequestId: data => data && data.id,
        });

        this.state = {
            authorized: undefined,
            wsp,
            waiting: {}

        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.authorized && !this.props.dialogs) {
            this.props.fetchDialogsList(this.state.wsp);
        }
    }

    componentDidMount() {
        const wsp = this.state.wsp;
        wsp.onClose.addListener(this.onClose.bind(this));
        wsp.open().then(() => {
            setTimeout(() => this.getSelfInfo(), 1000);
        });

        setTimeout(()=> {
            if (this.state.authorized === undefined) {
                this.setState({
                    authorized: false
                })
            }
        }, 10000);
    }

    async getSelfInfo() {
        try {
            const response = await this.state.wsp.sendRequest({jsonrpc: "2.0", method: "getSelfInfo"});

            this.state.wsp.onMessage.addListener(this.onNotification.bind(this));
            this.setState({
                authorized: true
            });
            this.props.setSelfInfo(response.result);
        } catch {
            this.setState({
                authorized: true
            });
        }

    }

    onNotification(data) {
        const message = JSON.parse(data);
        switch (message.code) {
            case 3001:
                this.props.receiveMessage(message.body, this.state.wsp);
                if (this.state.selectedDialog === message.body.senderTag) {
                    this.props.markMessagesWithUserAsRead(this.state.wsp, message.body.senderTag);
                }
                break;
            case 3300: {
                let count = 0;
                const waitAndMark = (message) => {
                    count ++;
                    if (this.state.waiting[message.body.receiverTag] && count < 10) {
                        setTimeout(() => {
                            waitAndMark(message);
                        }, 1000)
                    } else {
                        this.props.setReadStatus(message.body.receiverTag, false);
                    }
                }
                waitAndMark(message);
            }
                 break;
            case 3101:
                this.props.setOnlineStatusToContact(message.body.loggedInUserTag);
                break;
            case 3100:
                this.props.setOfflineStatusToContact(message.body.loggedOutUserTag);
                break;
            default:
        }
    }

    onClose(event) {
        if (event.reason) {
            const {Error} = JSON.parse(event.reason);
            if (Error.name === "NoAuthJWTError") {
                this.setState({
                    authorized: false
                })
            }
        }
    }

    onSelect(tag) {
        this.props.fetchAndMarkAsReadMessages(this.state.wsp, tag);
        this.setState({
            selectedDialog: tag
        });
    }

    onSend(text) {
        const receiverTag = this.state.selectedDialog;
        this.setState(state => {
            const waiting = state.waiting;
            waiting[receiverTag] = true;
            return { waiting }
        })
        this.props.sendMessageToUser(this.state.wsp, receiverTag, text).then(() => {
            this.setState(state => {
                const waiting = state.waiting;
                waiting[receiverTag] = false;
                return { waiting }
            })
        });
    }

    render() {
        if (this.state.authorized === undefined) {
            return <div>Wait...</div>
        }

        let messages;
        let person;
        if (this.state.selectedDialog) {
            messages = this.props.messages[this.state.selectedDialog];
            person = this.props.dialogs.find(dialog => dialog.userInfo.tag === this.state.selectedDialog)?.userInfo;
        }

        if (this.state.authorized) {
            return (
                <Window
                    onSelect={this.onSelect.bind(this)}
                    onSend={this.onSend.bind(this)}
                    selfInfo={this.props.selfInfo}
                    messages={messages}
                    person={person}
                    dialogs={this.props.dialogs || []}
                    selectedDialogTag={this.state.selectedDialog}
                    wsp={this.state.wsp}
                />
            )
        } else {
            return <Redirect to="/login" />
        }

    }
}

function mapStateToProps(state) {
    return {
        dialogs: state.socket.dialogs,
        selfInfo: state.socket.selfInfo,
        messages: state.socket.messages
    };
}

export default connect(mapStateToProps, windowActions)(WindowModule);