import { createSelector } from "reselect";

const userReducer = state => state.userReducer;

export const selectCurrentUser = createSelector(
    [userReducer],
    (userReducer) => userReducer.currentUser
)

export const selectUserError = createSelector(
    [userReducer],
    (userReducer)=>userReducer.error
)

export const selectUserIsLoading = createSelector(
    [userReducer],
    (userReducer)=>userReducer.isLoading
)