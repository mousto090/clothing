import { default as types } from "./types";
const { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } = types;

const actionsHandlers = {
    [SIGN_IN]: (state, action) => {
        return { ...state, error: null, isLoading: true }
    },
    [SIGN_IN_FAILURE]: (state, action) => {
        return { ...state, currentUser: null, error: null, isLoading: true }
    },
    [SIGN_IN_SUCCESS]: (state, action) => {
        const { currentUser } = action;
        return { ...state, currentUser: { ...currentUser }, isLoading: false }
    }
}

const initialState = {
    currentUser: null
}
const userReducer = (state = initialState, action) => {
    const { type } = action;
    const handler = actionsHandlers[type];
    return (handler && handler(state, action)) || state;
}


export default userReducer;