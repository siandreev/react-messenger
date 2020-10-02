import React from "react";

import "./MessageInput.scss"

class MessagesInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: ""
        }
    }

    render() {
        return(
            <div className="messages-input">
                <div className="messages-input__attach-file">
                    <i className="far fa-file-alt" />
                </div>
                <span role="textbox" className="messages-input__textbox" contentEditable
                    data-placeholder="Введите сообщение..."/>
                <div className="messages-input__send">
                    <i className="far fa-paper-plane" />
                </div>
            </div>
        )
    }
}

export default MessagesInput;