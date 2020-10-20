import React from "react";
import {IconButton, ModalMui} from "components/Modal/Modal.jsx";

import "./AddContact.scss";
import {TextField, InputAdornment} from "./AddContact";

class AddContact extends React.Component {
    constructor(props) {
        super(props);

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
                                    onChange={this.setTag}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">@</InputAdornment>,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="add-contact__contacts">
                        </div>
                    </div>
                </div>
            </ModalMui>
        )
    }
}

export default AddContact;