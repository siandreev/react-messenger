import {combineReducers} from "redux";
import socket from "./modules/Window/reducer";
import auth from "./modules/App/reducer";
import addContact from "./modules/AddContact/reducer"

export default combineReducers({socket, auth, addContact});