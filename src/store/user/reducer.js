import types from "./types";
import produce from "immer";
const { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } = types;

const actionsHandlers = {
    [SIGN_IN]: (draft, action) => {
        draft.error = null;
        draft.isLoading = true
    },
    [SIGN_IN_FAILURE]: (draft, action) => {
        draft.currentUser = null;
        draft.error = null;
        draft.isLoading = false;
    },
    [SIGN_IN_SUCCESS]: (draft, action) => {
        draft.currentUser = action.currentUser;
        draft.isLoading = false;
    }
}

const initialState = {
    currentUser: null
}
const userReducer = produce((draft, action) => {
    const { type } = action;
    const handler = actionsHandlers[type];
    return (handler && handler(draft, action));
}, initialState)


export default userReducer;