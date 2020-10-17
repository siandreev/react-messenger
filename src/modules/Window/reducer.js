export default function(state = {messages: {}}, action) {
    switch (action.type) {
        case "SOCKET:APPEND_MESSAGE": {
            const messagesObject = Object.assign({}, state.messages);
            if (!messagesObject[action.partnerTag]) {
                messagesObject[action.partnerTag] = [];
            }
            messagesObject[action.partnerTag].unshift(action.message);
            return Object.assign({}, state,{messages: messagesObject});
        }
        case "SOCKET:SET_DIALOGS_LIST":
            return Object.assign({}, state, {dialogs: action.dialogsList});
        case "SOCKET:SET_SELF_INFO":
            return Object.assign({}, state, {selfInfo: action.info})
        case "SOCKET:SET_MESSAGES_WITH_USER": {
            const messagesObject = Object.assign({}, state.messages);
            messagesObject[action.tag] = action.messages;
            return Object.assign({}, state, {messages: messagesObject});
        }
        case "SOCKET:MARK_AS_READ": {
            const messagesObject = Object.assign({}, state.messages);
            if (messagesObject[action.tag]) {
                const role = action.amIReceiver ? "senderTag" : "receiverTag";
                messagesObject[action.tag].forEach(message => {
                    if (message[role] === action.tag) {
                        message.isRead = true;
                    }
                });
            }
            return Object.assign({}, state, {messages: messagesObject});
        }
        default:
            return state;
    }
}