import {combineReducers} from "redux";
import socket from "./modules/Window/reducer";
import auth from "./modules/App/reducer";

export default combineReducers({socket, auth});