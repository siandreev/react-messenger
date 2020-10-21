const addContactAction = {
    setContacts(contacts) {
        return {
            type: "ADD_CONTACT:SET_CONTACTS",
            contacts
        }

    },
    fetchContacts: (wsp, tag) => async dispatch => {
        const contacts = await wsp.sendRequest({jsonrpc: "2.0", method: "findUsersByTag", params: [tag]});
        if (contacts.result) {
            dispatch(addContactAction.setContacts(contacts.result));
        }
    }
}

export default addContactAction;