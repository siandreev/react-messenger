import {combineReducers} from "redux";
import socket from "./modules/SocketManager/reducer";
import authorization from "./modules/AuthorizationForm/reducer";
import register from "./modules/RegistrationForm/reducer";

export default combineReducers({socket, authorization, register});