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
        case "SOCKET:UPDATE_DIALOGS_LIST": {
            const dialogs = state.dialogs.slice();
            const dialog = dialogs.find(dialog => dialog.userInfo.tag === action.updatedContact.tag);
            for (let key in action.updatedContact) {
                if (key !== "tag") {
                    dialog.userInfo = Object.assign({},
                        {...dialog.userInfo},
                        {[key]: action.updatedContact[key]});
                }
            }
            const newState = Object.assign({}, state);
            newState.dialogs = dialogs;
            return newState;
        }
        case "SOCKET:SET_SELF_INFO":
            return Object.assign({}, state, {selfInfo: action.info})
        case "SOCKET:SET_MESSAGES_WITH_USER": {
            const messagesObject = Object.assign({}, state.messages);
            messagesObject[action.tag] = action.messages;
            return Object.assign({}, state, {messages: messagesObject});
        }
        case "SOCKET:MARK_AS_READ": {
            const result = {};
            const messagesObject = Object.assign({}, state.messages);
            const opponentRole = action.amIReceiver ? "senderTag" : "receiverTag";
            if (messagesObject[action.tag]) {
                messagesObject[action.tag].forEach(message => {
                    if (message[opponentRole] === action.tag) {
                        message.isRead = true;
                    }
                });

                result.messages = messagesObject;
            }

            const dialogs = state.dialogs?.slice();
            const dialog = dialogs?.find(dialog => dialog.userInfo.tag === action.tag);

            if (dialog) {
                const IHasReadLastMessage = action.amIReceiver && dialog.senderTag === dialog.userInfo.tag;
                const MyLastMessageHasBeenRead = !action.amIReceiver && dialog.receiverTag === dialog.userInfo.tag;
                if (IHasReadLastMessage || MyLastMessageHasBeenRead) {
                    dialog.unreadCount = 0;
                }
                result.dialogs = dialogs;
            }

            return Object.assign({}, state, result);
        }
        case "SOCKET:SET_ONLINE_STATUS_TO_CONTACT": {
            const dialogs = state.dialogs?.map(dialog => {
                if (dialog.userInfo.tag === action.tag) {
                    dialog.userInfo.isOnline = true;
                }
                return JSON.parse(JSON.stringify(dialog));
            })
            return dialogs? Object.assign({}, state, {dialogs}) : state;
        }
        case "SOCKET:SET_OFFLINE_STATUS_TO_CONTACT": {
            const dialogs = state.dialogs?.map(dialog => {
                if (dialog.userInfo.tag === action.tag) {
                    dialog.userInfo.isOnline = false;
                }
                return JSON.parse(JSON.stringify(dialog));
            })

            return dialogs? Object.assign({}, state, {dialogs}) : state;
        }
        default:
            return state;
    }
}