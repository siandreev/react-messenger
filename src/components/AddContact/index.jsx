import React from "react";
import {IconButton, ModalMui} from "components/Modal/Modal.jsx";

import "./AddContact.scss";
import {TextField, InputAdornment} from "./AddContact";
import {Scrollbar} from "react-scrollbars-custom";
import ContactItem from "./ContactItem";

class AddContact extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.updateList = this.updateList.bind(this);
    }

    onClick(tag) {
        this.props.onSelect(tag);
    }

    updateList(e) {
        const tag = e.target.value;
        this.props.updateList(tag);
    }

    render() {
        return (
            <ModalMui
                open={this.props.open}
                onClose={this.props.onClose}
            >
                <div className="add-contact__container">
                    <IconButton onClick={this.props.onClose}>
                        <i className="fas fa-times add-contact__icon" />
                    </IconButton>
                    <div className="add-contact__wrapper">
                        <div className="add-contact__head">
                            <div className="add-contact__header">
                                <h2>Find contact</h2>
                            </div>
                            <div className="add-contact__search-field">
                                <TextField
                                    placeholder="tag"
                                    onChange={this.updateList}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">@</InputAdornment>,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="add-contact__contacts">
                            <Scrollbar style={{"height": "100%"}}>
                                <div>
                                    <ul className="add-contact__ul">
                                        {
                                           this.props.contacts.map(contact => {
                                                return (<ContactItem
                                                    key={contact._id}
                                                    person={{
                                                        tag: contact.tag,
                                                        firstName: contact.firstName,
                                                        lastName: contact.lastName,
                                                        isOnline: contact.isOnline,
                                                        img: `http://localhost:8000/${contact.img}`
                                                    }}
                                                    clickHandler={this.onClick}
                                                />)
                                            })
                                        }
                                    </ul>
                                </div>
                            </Scrollbar>
                        </div>
                    </div>
                </div>
            </ModalMui>
        )
    }
}

export default AddContact;