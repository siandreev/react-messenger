const windowActions = {
    appendMessage(message, partnerTag) {
        return {
            type: "SOCKET:APPEND_MESSAGE",
            message,
            partnerTag
        }
    },
    receiveMessage: (message, wsp) => async dispatch => {
        const dialogs = await wsp.sendRequest({jsonrpc: "2.0", method: "getDialogsList"});
        dispatch(windowActions.setDialogsList(dialogs.result));
        dispatch(windowActions.appendMessage(message, message.senderTag));
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
    fetchAndMarkAsReadMessages: (wsp, tag) => async dispatch => {
        const messagesObject = await wsp.sendRequest({jsonrpc: "2.0", method: "getMessagesWithUser", params: [tag]});
        dispatch(windowActions.setMessagesWithUser(tag, messagesObject.result));
        const markResponse = await wsp.sendRequest({jsonrpc: "2.0", method: "markMessagesWithUserAsRead", params: [tag]});
        if (markResponse?.result?.status === "OK") {
            dispatch(windowActions.setReadStatus(tag, true));
        }
    },
    sendMessageToUser: (wsp, tag, text) => async dispatch => {
        const response = await wsp.sendRequest({jsonrpc: "2.0", method: "sendMessageToUser", params: [tag, text]});
        if (response?.result?.status === "OK") {
            await windowActions.fetchDialogsList(wsp)(dispatch);
            dispatch(windowActions.appendMessage(response.result.message, tag));
        }
        return
    },
    setReadStatus(tag, amIReceiver) {
        return {
            type: "SOCKET:MARK_AS_READ",
            tag,
            amIReceiver
        }
    },
    markMessagesWithUserAsRead: (wsp, tag) => async dispatch => {
        const response = await wsp.sendRequest({jsonrpc: "2.0", method: "markMessagesWithUserAsRead", params: [tag]});
        if (response?.result?.status === "OK") {
            dispatch(windowActions.setReadStatus(tag, true));
        }
    },
    setOnlineStatusToContact(tag) {
        return {
            type: "SOCKET:SET_ONLINE_STATUS_TO_CONTACT",
            tag
        }
    },
    setOfflineStatusToContact(tag) {
        return {
            type: "SOCKET:SET_OFFLINE_STATUS_TO_CONTACT",
            tag
        }
    }
}

export default windowActions;