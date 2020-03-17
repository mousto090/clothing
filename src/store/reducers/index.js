import { combineReducers } from "redux";
import authReducer from "./auth";

const reducers = combineReducers({
    authReducer: authReducer
});

export default reducers;