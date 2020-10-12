import React from "react";
import { useHistory } from 'react-router-dom';
import {Button, Paper, TextField} from './AuthorizationForm.jsx';
import Modal from "../Modal"

import './AuthorizationForm.scss';

class AuthorizationForm extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            fields: {
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
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.submit = this.props.submit.bind(this);
        this.closeModal = this.closeModal.bind(this);
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
            <Paper elevation={3}>
                <div className="authorization-form">
                    <div className="authorization-form__row">
                        <h2 className="authorization-form__header">Sign up</h2>
                    </div>
                    <div className="authorization-form__row">
                        <TextField
                            label="Email"
                            error={!fields.email.isValid}
                            helperText={!fields.email.isValid ?
                                "Please enter a valid email" : ""}
                            className={fields.email.isValid ? "" : "wrong"}
                            onChange={this.setEmail}
                        />
                    </div>
                    <div className="authorization-form__row">
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
                    <div className="authorization-form__button">
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
                </div>
            </Paper>
        )
    }
}

export default () => {
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
            history.push("/");
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

    return <AuthorizationForm submit={submit} />
};