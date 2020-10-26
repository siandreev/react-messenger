import React from 'react';
import {Button} from "components/Settings/Settings";
import { IconButton, ModalMui } from "components/Modal/Modal.jsx";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {ButtonBase, Tooltip} from "@material-ui/core";
import {styled} from "@material-ui/core/styles";
import { AwesomeButtonSocial, AwesomeButton } from 'react-awesome-button';

import "./About.scss"
import "react-awesome-button/src/styles/styles.scss";

const ButtonBaseJSS = styled(ButtonBase)({
    width: '100%',
    height: 40,
    borderRadius: 5
});

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isTooltipOpen: false
        }

        this.onCopy = this.onCopy.bind(this);
    }

    onCopy() {
        this.setState({
            isTooltipOpen: true
        });
        setTimeout(() => this.setState({isTooltipOpen: false}), 1000);
    }

    render() {
        return (
            <ModalMui
                open={true}
                onClose={this.props.onClose}
            >
                <div className="about__container">
                    <IconButton onClick={this.props.onClose}>
                        <i className="fas fa-times about__exit" />
                    </IconButton>
                    <div className="about__header">
                        <h2>About</h2>
                    </div>
                    <div className="about__wrapper">
                        <div className="about__mobile-wrapper">
                            <div className="about__icon-wrapper">
                                <div className="about__way-icon">
                                    <h3><i className="fas fa-envelope about__icon"/></h3>
                                </div>
                                <div>version 1.00</div>
                            </div>
                            <div className="about__created-by">
                                Created by <span>Sergey Andreev</span>
                            </div>

                                <CopyToClipboard text="andreev.sergey.i@yandex.ru" onCopy={this.onCopy}>
                                    <div className="about__email-wrapper">
                                        <Tooltip open={this.state.isTooltipOpen} title="Copied!">
                                        <ButtonBaseJSS>
                                            <span>andreev.sergey.i@yandex.ru</span>
                                            <i className="fas fa-clipboard"/>
                                        </ButtonBaseJSS>
                                        </Tooltip>
                                    </div>
                                </CopyToClipboard>

                            <div className="about__buttons-container">
                                <a href="https://github.com/siandreev" target="_blank" rel="noopener noreferrer">
                                    <AwesomeButtonSocial
                                        type="github"
                                        url="https://github.com/"
                                        onPress={()=>{}}>
                                        Github
                                    </AwesomeButtonSocial>
                                </a>
                                <a href="https://t.me/siandreev" target="_blank" rel="noopener noreferrer">
                                    <AwesomeButton
                                        type="primary">
                                        <i className="fab fa-telegram-plane about__telegram-icon" />
                                        Telegram
                                    </AwesomeButton>
                                </a>
                            </div>
                        </div>
                        <div className="about__buttons-wrapper">
                            <Button onClick={this.props.onClose}>Close</Button>
                        </div>
                    </div>
                </div>
            </ModalMui>
        );
    }
}

export default About;