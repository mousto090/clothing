import types from "./types";
import produce from "immer";

const { ADD_ITEM } = types;

const actionsHandlers = {
    [ADD_ITEM]: (draft, action) =>  {
        const {item} = action;
        const existingItem = draft.items.find(it => it.id === item.id);
        existingItem ? existingItem.quantity++ : draft.items.push({...item, quantity: 1})
    }
}

const initialState = {
    items: []
};

const cartReducer = produce((draft, action) => {
    const { type } = action;
    const handler = actionsHandlers[type];
    return (handler && handler(draft, action));
}, initialState);

export default cartReducer;