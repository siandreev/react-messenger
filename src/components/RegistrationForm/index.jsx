import React from "react";
import { useHistory } from 'react-router-dom';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Button, Paper, TextField} from './RegistrationForm.jsx';

import './RegistrationForm.scss';

class RegistrationForm extends React.Component{
    constructor(props) {
        super(props);
        this.state={
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
        }
        this.setTag = this.setTag.bind(this);
        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.submit = this.props.submit.bind(this);
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
        this.setState({
            password: {
                value,
                isValid
            }
        })
    }

    saveTextFieldInfo(field, regexp, value) {
        const isValid = regexp.test(value);
        this.setState({
            [field]: {
                value,
                isValid
            }
        })
    }

    render() {
        return(
            <Paper elevation={3}>
            <div className="registration-form">
                <div className="registration-form__row">
                    <h2 className="registration-form__header">Sign up</h2>
                </div>
                <div className="registration-form__row">
                    <TextField
                        placeholder="tag"
                        error={!this.state.tag.isValid}
                        helperText={!this.state.tag.isValid ?
                            "Tag should only contain letters" : ""}
                        className={this.state.tag.isValid ? "" : "wrong"}
                        onChange={this.setTag}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">@</InputAdornment>,
                        }}
                    />
                </div>
                <div className="registration-form__row">
                    <TextField
                        label="First name"
                        error={!this.state.firstName.isValid}
                        helperText={!this.state.firstName.isValid ?
                            "First name must be letters only and start with a capital letter" : ""}
                        className={this.state.firstName.isValid ? "" : "wrong"}
                        onChange={this.setFirstName}
                    />
                </div>
                <div className="registration-form__row">
                    <TextField
                        label="Last name"
                        error={!this.state.lastName.isValid}
                        helperText={!this.state.lastName.isValid ?
                            "Last name must be letters only and start with a capital letter" : ""}
                        className={this.state.lastName.isValid ? "" : "wrong"}
                        onChange={this.setLastName}
                    />
                </div>
                <div className="registration-form__row">
                    <TextField
                        label="Email"
                        error={!this.state.email.isValid}
                        helperText={!this.state.email.isValid ?
                            "Please enter a valid email" : ""}
                        className={this.state.email.isValid ? "" : "wrong"}
                        onChange={this.setEmail}
                    />
                </div>
                <div className="registration-form__row">
                    <TextField
                        type="password"
                        label="Password"
                        error={!this.state.password.isValid}
                        helperText={!this.state.password.isValid ?
                            "Password length must be at least five" : ""}
                        className={this.state.password.isValid ? "" : "wrong"}
                        onChange={this.setPassword}
                    />
                </div>
                <div className="registration-form__row">
                     <Button
                         variant="contained"
                         color="primary"
                         onClick={this.submit}
                     >Sign up
                     </Button>
                </div>
            </div>
            </Paper>
        )
    }
}

export default () => {
    const history = useHistory();
    const submit = function() {
        if (this.state.tag.isValid && this.state.tag.isValid !== "" &&
            this.state.firstName.isValid && this.state.firstName !== "" &&
            this.state.lastName.isValid && this.state.lastName !== "" &&
            this.state.email.isValid && this.state.email !== "" &&
            this.state.password.isValid && this.state.password !== "") {

            history.push("/");
        }
    }

    return <RegistrationForm submit={submit} />
};