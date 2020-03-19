import { createSelector } from "reselect";

const selectCart = state => state.cartReducer;

export const getCartItems = createSelector([selectCart], (cart) => cart.items);
/**
 * Returns the total quantie of cart items
 * This prevent recompute quatite count unless items change
 */
export const getCartItemsCount = createSelector(
    [getCartItems],
    (items) => items.reduce((sumQte, item) => sumQte += item.quantity, 0)
)