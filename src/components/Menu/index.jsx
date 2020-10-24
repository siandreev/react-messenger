import React from "react";
import {slide as Burger} from "react-burger-menu";
import ButtonBase from '@material-ui/core/ButtonBase';
import { About } from "components";
import { AddContact, Settings } from "modules";

import "./Menu.scss";

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modals: {
                addContact: false,
                settings: false,
                about: false,
                exit: false
            },
            menuOpen: false
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.selectContact = this.selectContact.bind(this);
    }

    closeModal() {
        this.setState({
            modals: {
                addContact: false,
                settings: false,
                about: false,
                exit: false
            }
        });
    }

    openModal(modalName) {
        const modals = {
            addContact: false,
            settings: false,
            about: false,
            exit: false
        };

        modals[modalName] = true;
        this.setState({ modals });
    }

    selectContact(tag) {
        this.closeModal();
        this.closeMenu();
        this.props.onSelect(tag);
    }

    closeMenu () {
        this.setState({menuOpen: false})
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }

    render() {
        const img = `http://localhost:8000/${this.props.selfInfo?.img || "default.jpg"}`;
        const name = `${this.props.selfInfo?.firstName} ${this.props.selfInfo?.lastName}`
        return (
            <Burger pageWrapId={"page-wrap"}
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
            >
                <div className="menu">
                    <div className="menu__img" style={{backgroundImage : `url(${img})`}}>
                       <div className="menu__personal-data-wrapper">
                           <div className="menu__name">{name}</div>
                           <div className="menu__tag">{this.props.selfInfo?.tag}</div>
                       </div>
                    </div>
                    <div className="menu__options-list">
                        <ButtonBase style={{width: "100%"}} onClick={() => this.openModal("addContact")}>
                            <div className="option">
                                <span className="option__icon-wrapper">
                                    <i className="far fa-address-card" />
                                </span>
                                <span className="option__text-wrapper">Add contact</span>
                            </div>
                        </ButtonBase>
                        {
                            this.state.modals.addContact ? <AddContact
                                onSelect={this.selectContact}
                                onClose={this.closeModal}
                                wsp={this.props.wsp}
                            /> : undefined
                        }
                        <ButtonBase style={{width: "100%"}} onClick={() => this.openModal("settings")}>
                            <div className="option">
                                    <span className="option__icon-wrapper">
                                        <i className="fas fa-cog" />
                                    </span>
                                    <span className="option__text-wrapper">Settings</span>
                            </div>
                        </ButtonBase>
                        {
                            this.state.modals.settings ? <Settings
                                selfInfo={this.props.selfInfo}
                                onClose={this.closeModal}
                                wsp={this.props.wsp}
                            /> : undefined
                        }
                        <ButtonBase style={{width: "100%"}} onClick={() => this.openModal("about")}>
                            <div className="option">
                                <span className="option__icon-wrapper">
                                    <i className="fas fa-info-circle" />
                                </span>
                                <span className="option__text-wrapper">About</span>
                            </div>
                        </ButtonBase>
                        {
                            this.state.modals.about ? <About
                                onClose={this.closeModal}
                            /> : undefined
                        }
                    </div>
                    <div className="menu__exit-wrapper">
                        <ButtonBase style={{width: "100%"}}>
                            <div className="option">
                                <span className="option__icon-wrapper">
                                    <i className="fas fa-times" />
                                </span>
                                <span className="option__text-wrapper option__text-wrapper_danger">Exit</span>
                            </div>
                        </ButtonBase>
                    </div>
                </div>
            </Burger>
        )
    }
}

export default Menu;