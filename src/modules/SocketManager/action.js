const socketManagerActions = {
    receiveMessage(message) {
        return {
            type: "SOCKET:RECEIVE_MESSAGE",
            message
        }
    }
}

export default socketManagerActions;