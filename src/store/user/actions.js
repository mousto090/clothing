import { default as types } from "./types";

const { SIGNIN_INIT, SIGNIN, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } = types;

export const signinInit = () => ({ type: SIGNIN_INIT });
export const signin = (email, password) => ({ type: SIGNIN, email, password });
export const signinSuccess = (currentUser) => ({
    type: SIGN_IN_SUCCESS,
    currentUser
});
export const signinFailure = () => ({ type: SIGN_IN_FAILURE });