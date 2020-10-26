import React from "react";
import { Picker } from 'emoji-mart';
import { IconButton } from "./MessagesInput";

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
        this.hideEmojiMenu = this.hideEmojiMenu.bind(this);
        this.showEmojiMenu = this.showEmojiMenu.bind(this);

    }

    toggleEmojiMenu() {
        this.setState(function(prevState) {
            return {isEmojiMenuOpen: !prevState.isEmojiMenuOpen};
        });
    }

    hideEmojiMenu() {
        this.setState( {
            isEmojiMenuOpen: false
        });
    }

    showEmojiMenu() {
        this.setState( {
            isEmojiMenuOpen: true
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
        if (this.state.typedText) {
            this.props.onSend(this.state.typedText);
            this.textBox.current.textContent = "";
            this.setState({
                typedText: "",
                invalid: false
            })
        } else {
            this.setState({
                typedText: "",
                invalid: true
            })
            setTimeout(() => this.setState({
                typedText: "",
                invalid: false
            }), 500);
        }
    }

    render() {
        let pickerStyle =  {
            position: 'absolute',
            bottom: '25px',
            right: '20px'
        };

        if (window.innerWidth <= 426) {
            pickerStyle =  {
                position: 'absolute',
                bottom: '25px',
                right: '-40px'
            };
        }

        const shakeClass = this.state.invalid ? " messages-input__textbox_invalid" : "";
        let emoji;
        let emojiIconClass = "";
        if (this.state.isEmojiMenuOpen) {
            emojiIconClass = " messages-input__emoji_active";
            emoji = (
                <Picker theme="dark"
                    title=""
                    style={ pickerStyle }
                    onSelect={this.insertEmoji}
                />);
        }
        return(
            <div className="messages-input">
                <div className="messages-input__attach-file">
                    <IconButton aria-label="" onClick={()=>alert("Прикрепление файлов пока не работает :)")}> {//TODO Add attach file handler
                         }
                        <i className="far fa-file-alt" />
                    </IconButton>
                </div>
                <div className="messages-input__field">
                    <div
                        ref={this.textBox}
                        role="textbox"
                        className={"messages-input__textbox" + shakeClass}
                        contentEditable
                        data-placeholder="Введите сообщение..."
                        onInput={this.onTextChange}
                    />
                    <div
                        className="messages-input__icon-wrapper"
                        onMouseLeave={this.hideEmojiMenu}
                    >
                        <i className={"far fa-grin messages-input__emoji" + emojiIconClass}
                           onMouseEnter={this.showEmojiMenu}/>
                    </div>
                    <div id="emojiMenu"  onMouseLeave={this.toggleEmojiMenu} onMouseEnter={this.toggleEmojiMenu}>
                        {emoji}
                    </div>
                </div>
                <div className="messages-input__send">
                    <IconButton aria-label="" onClick={this.onSend}>
                        <i className="far fa-paper-plane" />
                    </IconButton>
                </div>
            </div>
        )
    }
}

export default MessagesInput;