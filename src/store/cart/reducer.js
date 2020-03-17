import types from "./types";

const actionsHandlers = {

}

const initialState = {};

const cartReducer = (state = initialState, action) => {
    const {type} = action;
    const handler = actionsHandlers[type];
    return (handler && handler(state, action)) || state
}

export default cartReducer;