import React from "react";
import AuthorizationForm from "components/AuthorizationForm";
import {connect} from "react-redux";
import authorizationFormActions from "./action";

class AuthorizationFormContainer extends React.PureComponent {

    login(data) {
        return this.props.fetchLogin(data);
    }
    render() {
        return <AuthorizationForm login={this.login.bind(this)} />
    }
}

export default connect(null, authorizationFormActions)(AuthorizationFormContainer);