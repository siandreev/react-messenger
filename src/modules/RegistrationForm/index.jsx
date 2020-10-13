import React from "react";
import RegistrationForm from "components/RegistrationForm";
import {connect} from "react-redux";
import registrationFormActions from "./action";

class RegistrationFormContainer extends React.PureComponent {

    signup(data) {
        return this.props.fetchRegister(data);
    }
    render() {
        return <RegistrationForm signup={this.signup.bind(this)} />
    }
}

export default connect(null, registrationFormActions)(RegistrationFormContainer);