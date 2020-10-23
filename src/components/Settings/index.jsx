import React from 'react';
import { IconButton, ModalMui } from "components/Modal/Modal.jsx";
import { TextField, ButtonBase } from "./Settings";
import { Button } from './Settings';
import variables from "styles/variables.scss"
import "./Settings.scss"

import Loader from "react-spinners/ClipLoader";


class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: {
                correct: true,
                updated: false,
                value: this.props.selfInfo?.firstName
            },
            lastName: {
                correct: true,
                updated: false,
                value: this.props.selfInfo?.lastName
            },
            image: {
                updated: false,
                value: this.props.selfInfo?.img
            },
            enableSave: false
        }

        this.inputRef = React.createRef();
        this.openFileDialog = this.openFileDialog.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
        this.onNameChanges = this.onNameChanges.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.newImage !== prevProps.newImage) {
            this.setState(state=> {
                const update = {
                    image: {
                        updated: true,
                        value: this.props.newImage
                    }
                }
                if (state.firstName.correct && state.lastName.correct) {
                    update.enableSave = true;
                }
                return update;
            });
        }
    }

    openFileDialog() {
        const fileUploadDom = this.inputRef.current;
        fileUploadDom.click();
    }

    uploadImage(e) {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file, file.name);

        this.props.uploadImage(formData);
    }

    saveChanges() {
        const newFirstName = this.state.firstName.updated ? this.state.firstName.value : "";
        const newLastName = this.state.lastName.updated ? this.state.lastName.value : "";
        const newImage = this.state.image.updated ? this.state.image.value : "";
        this.props.saveChanges(newFirstName, newLastName, newImage);
        console.log("close");
        this.props.onClose();
    }

    onNameChanges(field) {
        return e => {
            let anotherField = field === "firstName" ? "lastName" : "firstName";
            const newFirstName = e.target.value;
            const updated = newFirstName !== this.props.selfInfo?.[field];
            let correct = true;
            if (!/^[A-ZА-Я][a-zа-я]+$/.test(newFirstName)) {
                correct = false;
                this.setState({
                    enableSave: false
                })
            }
            if(correct && updated) {
                this.setState(prevState => {
                    if (prevState[anotherField].correct === true) {
                        return {enableSave: true}
                    }
                })
            }
            if (!updated) {
                this.setState(prevState => {
                    if (!prevState[anotherField].updated && !prevState.image.updated) {
                        return {enableSave: false}
                    }
                })
            }
            this.setState({
                [field]: {
                    value: newFirstName,
                    updated,
                    correct
                },
            })
        }
    }


    render() {
        const imgName = this.state.image.value || "default.jpg";
        const img = `http://localhost:8000/${imgName}`;
        let pictureContainer = (
            <div className="settings__img" style={{backgroundImage: `url(${img})`}}>
                <div className="settings__hint">
                    <i className="fas fa-file-upload settings__upload-icon" />
                </div>
            </div>);
        if (this.props.uploadingProcess) {
            pictureContainer = (
                <Loader
                    size={80}
                    color={variables.active}
                    loading={this.props.uploadingProcess}
                />);
        }
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
                            <input
                                accept="image/*"
                                className="settings__upload-input"
                                id="upload-file-button"
                                type="file"
                                ref={this.inputRef}
                                onChange={this.uploadImage}
                            />
                            <ButtonBase onClick={this.openFileDialog}>
                                { pictureContainer }
                            </ButtonBase>
                        </div>
                        <div className="settings__text-fields-wrapper">
                            <TextField
                                label="First name"
                                onChange={this.onNameChanges("firstName")}
                                defaultValue={this.props.selfInfo?.firstName}
                                error={!this.state.firstName.correct}
                                className={this.state.firstName.correct ? "" : "wrong"}
                            />
                            <TextField
                                label="Last name"
                                onChange={this.onNameChanges("lastName")}
                                defaultValue={this.props.selfInfo?.lastName}
                                error={!this.state.lastName.correct}
                                className={this.state.lastName.correct ? "" : "wrong"}
                            />
                        </div>
                        <div className="settings__buttons-wrapper">
                            <Button onClick={this.props.onClose}>Close</Button>
                            <Button disabled={!this.state.enableSave} onClick={this.saveChanges}>Save</Button>
                        </div>
                    </div>
                </div>
            </ModalMui>
        );
    }
}

export default Settings;