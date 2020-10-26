import {combineReducers} from "redux";
import socket from "./modules/Window/reducer";
import auth from "./modules/App/reducer";
import addContact from "./modules/AddContact/reducer"

const appReducer = combineReducers({socket, auth, addContact});

const rootReducer = (state, action) => {
    if (action.type === 'APP:EXIT') {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer;