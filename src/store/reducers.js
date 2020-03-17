import { combineReducers } from "redux";
import userReducer  from "./user/reducer";
import cartReducer  from "./cart/reducer";

const reducers = combineReducers({
    userReducer,
    cartReducer
})

export default reducers;