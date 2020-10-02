import React from "react";

import "./Message.scss"

class Message extends React.Component{
    render() {
        const message = this.props.message;
        const date = new Date(Number(message.time));
        const time = date.getHours() + ":" + date.getMinutes();
        const positionClass = message.isIncoming ? "message_incoming" : "message_outgoing";
        return(
            <li className="message">
                <div className="message__separator"></div>
                <div className={positionClass + " message__wrapper"}>
                    <div className="message__content">
                        <span className="message__text">{message.text}</span>
                        <span className="message__time">{time}</span>
                    </div>
                </div>
            </li>
        )
    }
}

export default Message;