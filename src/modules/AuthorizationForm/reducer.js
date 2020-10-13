export default function(state = {isAuthorized: false}, action) {
    switch (action.type) {
        case "LOGIN:SET_AUTH_STATUS":
            return {
                ...state,
                isAuthorized: action.isAuthorized
            };
        default:
            return state;
    }
}