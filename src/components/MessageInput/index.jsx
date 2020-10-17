import React from "react";
import { Picker } from 'emoji-mart';

import 'emoji-mart/css/emoji-mart.css'
import "./MessageInput.scss"

class MessagesInput extends React.Component {
    constructor(props) {
        super(props);
        this.textBox = React.createRef();
        this.state = {
            typedText: "",
            isEmojiMenuOpen: false
        }

        this.onTextChange = this.onTextChange.bind(this);
        this.onSend = this.onSend.bind(this);
        this.insertEmoji = this.insertEmoji.bind(this);
        this.toggleEmojiMenu = this.toggleEmojiMenu.bind(this);

    }

    toggleEmojiMenu() {
        this.setState(function(prevState) {
            return {isEmojiMenuOpen: !prevState.isEmojiMenuOpen};
        });
    }

    insertEmoji(e) {
        const updatedText = this.state.typedText + e.native;
        this.textBox.current.textContent = updatedText;
        this.setState({
            typedText:  updatedText
        })
    }

    onTextChange(event) {
        this.setState({
            typedText: event.currentTarget.textContent
        })
    }

    onSend() {
        this.props.onSend(this.state.typedText);
        this.textBox.current.textContent = "";
        this.setState({
            typedText: ""
        })
    }

    render() {
        let emoji;
        let emojiIconClass = "";
        if (this.state.isEmojiMenuOpen) {
            emojiIconClass = " messages-input__emoji_active";
            emoji = (
                <Picker theme="dark"
                    title=""
                    style={
                        {
                            position: 'absolute',
                            bottom: '25px',
                            right: '20px'
                        }
                    }
                    onSelect={this.insertEmoji}
                />);
        }
        return(
            <div className="messages-input">
                <div className="messages-input__attach-file">
                    <i className="far fa-file-alt" />
                </div>
                <div className="messages-input__field">
                    <div
                        ref={this.textBox}
                        role="textbox"
                        className="messages-input__textbox"
                        contentEditable
                        data-placeholder="Введите сообщение..."
                        onInput={this.onTextChange}
                    />
                    <div
                        className="messages-input__icon-wrapper"
                        onMouseEnter={this.toggleEmojiMenu}
                        onMouseLeave={this.toggleEmojiMenu}
                    >
                        <i className={"far fa-grin messages-input__emoji" + emojiIconClass}/>
                    </div>
                    <div id="emojiMenu"  onMouseLeave={this.toggleEmojiMenu} onMouseEnter={this.toggleEmojiMenu}>
                        {emoji}
                    </div>
                </div>
                <div className="messages-input__send">
                    <i className="far fa-paper-plane" onClick={this.onSend}/>
                </div>
            </div>
        )
    }
}

export default MessagesInput;