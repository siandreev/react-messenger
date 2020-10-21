import React from "react";
import Message from "components/Message"

import "./MessagesList.scss";
import {Scrollbar} from "react-scrollbars-custom";



class MessagesList extends React.Component {
    constructor(props) {
        super(props);
        this.scrollBar = React.createRef();
    }

    componentDidMount() {
        if (this.scrollBar.current) {
            this.scrollBar.current.scrollToBottom();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.scrollBar.current) {
            this.scrollBar.current.scrollToBottom();
        }
    }

    render() {
        if (this.props.messages) {
            if (this.props.messages.length) {
                return (
                    <div className="messages-list">
                        <Scrollbar
                            style={{"height": "100%"}}
                            ref={this.scrollBar}>
                            <div className="messages-list__wrapper">
                                <ul>
                                    {this.props.messages.slice().reverse().map(message =>
                                        <Message
                                            key={message._id}
                                            message={{
                                                text: message.text,
                                                date: message.date,
                                                isIncoming: this.props.person.tag === message.senderTag,
                                                isRead: message.isRead
                                            }}
                                        />)}
                                </ul>
                            </div>
                        </Scrollbar>
                    </div>
                )
            } else {
                return (
                    <div className="notification__container">
                        <div className="notification__wrapper">
                            No any messages yet
                        </div>
                    </div>
                );
            }
        } else {
            return (
                <div className="notification__container">
                    <div className="notification__wrapper">
                        Select chat to start messaging
                    </div>
                </div>
            );
        }
    }
}

export default MessagesList;