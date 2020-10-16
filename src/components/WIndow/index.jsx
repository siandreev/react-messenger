import React from "react";

import {stack as Menu} from "react-burger-menu";
import {ContactsList, MessagesWindow} from "../index";

import "./Window.scss"
import 'styles/burger.scss';

class Window extends React.Component {

    render() {
        return(
            <div className="window__content">
                <Menu pageWrapId={"page-wrap"}>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                </Menu>
                <main  id="page-wrap" className="window__content">
                    <div className="window__header"></div>
                    <div className="window__main-wrapper">
                        <div className="window__column-s">
                            <ContactsList
                                onSelect={this.props.onSelect}
                                selfInfo={this.props.selfInfo}
                                contacts={this.props.dialogs}/>
                        </div>
                        <div className="window__column">
                            <MessagesWindow
                                onSend={this.props.onSend}
                                messages={this.props.messages}
                                person={this.props.person}/>
                        </div>
                    </div>
                    <div className="window__footer"></div>
                </main>
            </div>)
    }
}

export default Window;