export default function(state = [], action) {
    switch (action.type) {
        case "SOCKET:RECEIVE_MESSAGE":
            return state.concat(action.message);
        default:
            return state;
    }
}