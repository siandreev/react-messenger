import React from "react";

import "./Message.scss"

class Message extends React.Component{
    render() {
        const message = this.props.message;
        const date = new Date(message.date);
        const minutes = date.getMinutes();
        const time = date.getHours() + ":" + (minutes < 10 ? `0${minutes}` : minutes)
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