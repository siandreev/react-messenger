import React from "react";
import MessagesList from "components/MessagesList"
import MessagesInput from "components/MessageInput";

import "./MessagesWindow.scss";


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
        return(
            <div className="messages-window">
                <MessagesList person={this.props.person} messages={this.props.messages}/>
                {this.props.messages ? <MessagesInput onSend={this.props.onSend}/> : ""}
            </div>
        )
    }
}

export default MessagesWindow;