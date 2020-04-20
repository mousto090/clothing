import types from "./types";
import produce from "immer";
import SHOP_COLLECTIONS from "../../data/shopData";

const {INIT_SHOP_COLLECTIONS} = types;

const actionsHandlers = {
    [INIT_SHOP_COLLECTIONS]: (draft, action) => {
        // draft.collections = SHOP_COLLECTIONS;
    }
}

const initialState = {
    collections: SHOP_COLLECTIONS
};

const shopReducer = produce((draft , action) => {
    const {type} = action;
    const handler = actionsHandlers[type];
    return handler && handler(draft, action)
}, initialState)

export default shopReducer;