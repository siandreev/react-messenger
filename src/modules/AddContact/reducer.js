export default function (state = {}, action) {
    switch (action.type) {
        case "ADD_CONTACT:SET_CONTACTS":
            return Object.assign({}, state, {contacts: action.contacts});
        default:
            return state;
    }
}