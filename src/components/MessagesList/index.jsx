import React from "react";
import Message from "components/Message"

import "./MessagesList.scss";



class MessagesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: props.person,
            messages: props.messages
        }
    }
    render() {
        return(
            <div className="messages-list">
                <ul>
                    {this.state.messages.map(message => <Message key={message.id} message={message}/>)}
                </ul>
            </div>
        )
    }
}

export default MessagesList;