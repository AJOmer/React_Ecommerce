import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import checkout from "./checkout";
import shirt from "./shirt";

export default combineReducers({
    alert,
    auth,
    checkout,
    shirt,
});