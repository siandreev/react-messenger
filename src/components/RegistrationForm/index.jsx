import React from "react";
import { useHistory } from 'react-router-dom';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Button, Paper, TextField} from './RegistrationForm.jsx';
import Modal from "../Modal"

import './RegistrationForm.scss';

class RegistrationForm extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            fields: {
                tag: {
                    value: "",
                    isValid: true
                },
                firstName: {
                    value: "",
                    isValid: true
                },
                lastName: {
                    value: "",
                    isValid: true
                },
                email: {
                    value: "",
                    isValid: true
                },
                password: {
                    value: "",
                    isValid: true
                }
            },
            modal: {
                open: false,
                header: "",
                text: ""
            }
        }
        this.setTag = this.setTag.bind(this);
        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.submit = this.props.submit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    setTag(e) {
        this.saveTextFieldInfo("tag", /^[A-Za-z]+$/, e.target.value)
    }

    setFirstName(e) {
        this.saveTextFieldInfo("firstName", /^[A-ZА-Я][a-zа-я]+$/, e.target.value)
    }

    setLastName(e) {
        this.saveTextFieldInfo("lastName", /^[A-ZА-Я][a-zа-я]+$/, e.target.value)
    }

    setEmail(e) {
        this.saveTextFieldInfo("email", /^\S+@\S+\.\S+$/, e.target.value)
    }

    setPassword(e) {
        const value = e.target.value;
        const isValid = value.length >= 5;
        const fields = { ...this.state.fields }
        fields.password = { value, isValid }
        this.setState({fields})
    }

    saveTextFieldInfo(field, regexp, value) {
        const isValid = regexp.test(value);
        const fields = { ...this.state.fields }
        fields[field] = { value, isValid }
        this.setState({fields})
    }

    closeModal() {
        this.setState({
            modal: {
                open: false
            }
        })
    }

    render() {
        const fields = this.state.fields;
        return(
            <div className="registration-form">
                <Paper elevation={3}>
                    <div className="registration-form__header">
                        <h2>Sign up</h2>
                    </div>
                    <div className="registration-form__fields">
                        <div className="registration-form__row">
                            <TextField
                                placeholder="tag"
                                error={!fields.tag.isValid}
                                helperText={!fields.tag.isValid ?
                                    "Tag should only contain letters" : ""}
                                className={fields.tag.isValid ? "" : "wrong"}
                                onChange={this.setTag}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">@</InputAdornment>,
                                }}
                            />
                        </div>
                        <div className="registration-form__row">
                            <TextField
                                label="First name"
                                error={!fields.firstName.isValid}
                                helperText={!fields.firstName.isValid ?
                                    "First name must be letters only and start with a capital letter" : ""}
                                className={fields.firstName.isValid ? "" : "wrong"}
                                onChange={this.setFirstName}
                            />
                        </div>
                        <div className="registration-form__row">
                            <TextField
                                label="Last name"
                                error={!fields.lastName.isValid}
                                helperText={!fields.lastName.isValid ?
                                    "Last name must be letters only and start with a capital letter" : ""}
                                className={fields.lastName.isValid ? "" : "wrong"}
                                onChange={this.setLastName}
                            />
                        </div>
                        <div className="registration-form__row">
                            <TextField
                                label="Email"
                                error={!fields.email.isValid}
                                helperText={!fields.email.isValid ?
                                    "Please enter a valid email" : ""}
                                className={fields.email.isValid ? "" : "wrong"}
                                onChange={this.setEmail}
                            />
                        </div>
                        <div className="registration-form__row">
                            <TextField
                                type="password"
                                label="Password"
                                error={!fields.password.isValid}
                                helperText={!fields.password.isValid ?
                                    "Password length must be at least five" : ""}
                                className={fields.password.isValid ? "" : "wrong"}
                                onChange={this.setPassword}
                            />
                        </div>
                    </div>
                    <div className="registration-form__bottom">
                         <Button
                             variant="contained"
                             onClick={this.submit}
                         >Sign up
                         </Button>
                         <Modal
                             open={this.state.modal.open}
                             onClose={this.closeModal}
                             header={this.state.modal.header}
                             text={this.state.modal.text}
                         />
                    </div>
                </Paper>
            </div>
        )
    }
}

export default ({signup}) => {
    const history = useHistory();
    const submit = function() {
        const fields = { ...this.state.fields }
        const incorrect = [];

        for (let key in this.state.fields) {
            if (!this.state.fields[key].isValid || this.state.fields[key].value === "") {
                fields[key].isValid = false;
                incorrect.push(key);
            }
        }

        if (!incorrect.length) {
            const data = {
                tag: `@${this.state.fields.tag.value}`,
                firstName: this.state.fields.firstName.value,
                lastName: this.state.fields.lastName.value,
                email: this.state.fields.email.value,
                password: this.state.fields.password.value
            }
            signup(data).then(isAuthorized => {
                if (isAuthorized) {
                    history.push("/");
                } else {
                    this.setState({
                        fields,
                        modal: {
                            open: true,
                            header: "This user already exists",
                            text: "Email and tag must be unique."
                        }
                    })
                }
            });
        } else {
            this.setState({
                fields,
                modal: {
                    open: true,
                    header: "The form is filled out incorrectly",
                    text: `The following fields are not filled in correctly: ${incorrect.join(", ")}.`
                }
            })
        }
    }

    return <RegistrationForm submit={submit} />
};