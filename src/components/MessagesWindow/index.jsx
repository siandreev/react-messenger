import React from "react";
import MessagesList from "components/MessagesList"
import MessagesInput from "components/MessageInput";

import "./MessagesWindow.scss";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "components/Avatar";


class MessagesWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: props.person,
            messages: props.messages,
            typedText: ""
        }
    }

    render() {
        let mobileContent;
        if (window.innerWidth <=425) {
            const person = this.props.person;
            mobileContent = (
                <div>
                    <div className="messages-window__person-info-wrapper">
                        <span className="messages-window__person-info">
                                <Avatar
                                    url={"/img/" + person?.img}
                                    isOnline={person?.isOnline}
                                    color="secondary"
                                    hoverColor="hovered"/>
                            <span className="messages-window__name">
                                {person?.firstName + " " + person?.lastName}
                            </span>
                        </span>
                    </div>
                    <div className="messages-window__back">
                        <IconButton onClick={this.props.removeSelection}>
                            <i className="fas fa-arrow-left" />
                        </IconButton>
                    </div>
                </div>);
        }

        return(
            <div className="messages-window">
                {mobileContent}
                <MessagesList person={this.props.person} messages={this.props.messages}/>
                {this.props.messages ? <MessagesInput onSend={this.props.onSend}/> : ""}
            </div>
        )
    }
}

export default MessagesWindow;