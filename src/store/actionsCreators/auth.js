import { authActionsTypes } from "../actionsTypes";
const { SIGNIN_INIT, SIGNIN, SIGN_IN_SUCCESS } = authActionsTypes;

export const signinInit = () => ({ type: SIGNIN_INIT });
export const signin = (email, password) => ({ type: SIGNIN, email, password });
export const signinSuccess = (currentUser) => ({
    type: SIGN_IN_SUCCESS,
    currentUser
});