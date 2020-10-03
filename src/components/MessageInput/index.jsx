import React from "react";
import { Picker } from 'emoji-mart';

import 'emoji-mart/css/emoji-mart.css'
import "./MessageInput.scss"

class MessagesInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: "",
            isEmojiMenuOpen: false
        }

        this.insertEmoji = this.insertEmoji.bind(this);
        this.toggleEmojiMenu = this.toggleEmojiMenu.bind(this);

    }

    toggleEmojiMenu() {
        this.setState(function(prevState, props) {
            if (prevState.isEmojiMenuOpen) {
                document.querySelector("#emojiMenu").firstElementChild.style.display = "none";
                return {
                    isEmojiMenuOpen: false
                };
            } else {
                document.querySelector("#emojiMenu").firstElementChild.style.display = "inline-block";
                return {
                    isEmojiMenuOpen: true
                };
            }

        });
    }

    insertEmoji(e) {
        document.querySelector(".messages-input__textbox").textContent += e.native;
    }

    render() {
        return(
            <div className="messages-input">
                <div className="messages-input__attach-file">
                    <i className="far fa-file-alt" />
                </div>
                <div className="messages-input__field">
                    <div role="textbox" className="messages-input__textbox" contentEditable
                          data-placeholder="Введите сообщение..." />
                    <div className="messages-input__icon-wrapper">
                        <i className="far fa-grin" onClick={this.toggleEmojiMenu} />
                    </div>
                    <div id="emojiMenu">
                        <Picker theme="dark"
                                title=""
                                style={
                                    {
                                        position: 'absolute',
                                        bottom: '25px',
                                        right: '20px',
                                        display: 'none'}
                                }
                                onSelect={this.insertEmoji}
                        />
                    </div>
                </div>
                <div className="messages-input__send">
                    <i className="far fa-paper-plane" />
                </div>
            </div>
        )
    }
}

export default MessagesInput;