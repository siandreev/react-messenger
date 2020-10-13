import authApi from "core/axios/api"

const registrationFormActions = {
    setAuthorizationStatus(isAuthorized) {
        return {
            type: "REGISTER:SET_AUTH_STATUS",
            isAuthorized
        }
    },
    fetchRegister: data => async dispatch => {
        try {
            await authApi.signup(data);
            dispatch(registrationFormActions.setAuthorizationStatus(true));
            return true;
        } catch {
            dispatch(registrationFormActions.setAuthorizationStatus(false));
            return false;
        }
    }
}

export default registrationFormActions;