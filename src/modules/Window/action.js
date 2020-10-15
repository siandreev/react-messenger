const windowActions = {
    appendMessage(message) {
        return {
            type: "SOCKET:APPEND_MESSAGE",
            message
        }
    },
    receiveMessage: (message, wsp) => async dispatch => {
        const dialogs = await wsp.sendRequest({jsonrpc: "2.0", method: "getDialogsList"});
        dispatch(windowActions.setDialogsList(dialogs.result));
        dispatch(windowActions.appendMessage(message));
    },
    setDialogsList(dialogsList) {
        return {
            type: "SOCKET:SET_DIALOGS_LIST",
            dialogsList
        }
    },
    fetchDialogsList: wsp => async dispatch => {
        const dialogs = await wsp.sendRequest({jsonrpc: "2.0", method: "getDialogsList"});
        dispatch(windowActions.setDialogsList(dialogs.result));
    },
    setSelfInfo(info) {
        return {
            type: "SOCKET:SET_SELF_INFO",
            info
        }
    },
    setMessagesWithUser(tag, messages) {
        return {
            type: "SOCKET:SET_MESSAGES_WITH_USER",
            tag,
            messages
        }
    },
    fetchMessages: (wsp, tag) => async dispatch => {
        const response = await wsp.sendRequest({jsonrpc: "2.0", method: "getMessagesWithUser", params: [tag]});
        dispatch(windowActions.setMessagesWithUser(tag, response.result));
    }
}

export default windowActions;