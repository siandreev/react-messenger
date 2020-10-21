import React from 'react';
import { IconButton, ModalMui } from "components/Modal/Modal.jsx";
import { TextField, ButtonBase } from "./Settings";
import { Button } from './Settings';

import variables from "styles/variables.scss"
import "./Settings.scss"



class Settings extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const img = `http://localhost:8000/${this.props.selfInfo?.img}`;
        return (
            <ModalMui
                open={true}
                onClose={this.props.onClose}
            >
                <div className="settings__container">
                    <IconButton onClick={this.props.onClose}>
                        <i className="fas fa-times add-contact__icon" />
                    </IconButton>
                    <div className="settings__wrapper">
                        <div className="settings__header">
                            <h2>Settings</h2>
                        </div>
                        <div className="settings__img-wrapper">
                            <ButtonBase>
                                <div className="settings__img" style={{backgroundImage: `url(${img})`}}>
                                    <div className="settings__hint">
                                        <i className="fas fa-file-upload settings__upload-icon" />
                                    </div>
                                </div>
                            </ButtonBase>
                        </div>
                        <div className="settings__text-fields-wrapper">
                            <TextField
                                label="First name"
                                onChange={()=>{}}
                                defaultValue={this.props.selfInfo?.firstName}
                            />
                            <TextField
                                label="Last name"
                                onChange={()=>{}}
                                defaultValue={this.props.selfInfo?.lastName}
                            />
                        </div>
                        <div className="settings__buttons-wrapper">
                            <Button>Close</Button>
                            <Button disabled>Save</Button>
                        </div>
                    </div>
                </div>
            </ModalMui>
        );
    }
}

export default Settings;