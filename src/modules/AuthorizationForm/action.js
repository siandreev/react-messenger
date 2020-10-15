import authApi from "core/axios/api"

const authorizationFormActions = {
    setAuthorizationStatus(isAuthorized) {
        return {
          type: "AUTH:SET_AUTH_STATUS",
          isAuthorized
        }
    },
    fetchLogin: data => async dispatch => {
        try {
            await authApi.login(data);
            dispatch(authorizationFormActions.setAuthorizationStatus(true));
            return true;
        } catch {
            dispatch(authorizationFormActions.setAuthorizationStatus(false));
            return false;
        }
    }
}

export default authorizationFormActions;