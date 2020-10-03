import React from "react";
import Message from "components/Message"

import "./MessagesList.scss";
import {Scrollbar} from "react-scrollbars-custom";



class MessagesList extends React.Component {
    constructor(props) {
        super(props);
        this.scrollBar = React.createRef();
        this.state = {
            person: props.person,
            messages: props.messages
        }
    }

    componentDidMount() {
        this.scrollBar.current.scrollToBottom();
    }

    render() {
        return(
            <div className="messages-list">
                <Scrollbar style={{"height": "100%"}} ref={this.scrollBar}>
                    <div>
                        <ul>
                            {this.state.messages.map(message => <Message key={message.id} message={message}/>)}
                        </ul>
                    </div>
                </Scrollbar>
            </div>
        )
    }
}

export default MessagesList;