import types from "./types";

const { ADD_ITEM } = types;

const actionsHandlers = {
    [ADD_ITEM]: (state, action) => {
        const { item } = action;
        const { items } = state;

        const addedItem = items.find(it => it.id === item.id);
        let updatedItems;
        if (addedItem) {
            //update quantity
            updatedItems = items.map(it => (it.id === item.id ? { ...it, quantity: it.quantity + 1 } : it))
        } else {
            //add the new item
            updatedItems = [...items, { ...item, quantity: 1 }];
        }

        return { ...state, items: updatedItems }
    }
}

const initialState = {
    items: []
};

const cartReducer = (state = initialState, action) => {
    const { type } = action;
    const handler = actionsHandlers[type];
    return (handler && handler(state, action)) || state
}

export default cartReducer;