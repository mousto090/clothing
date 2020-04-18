import { createSelector } from "reselect";

const selectCart = state => state.cartReducer;

export const getCartItems = createSelector([selectCart], (cartReducer) => cartReducer.items);
/**
 * Returns the total quantie of cart items
 * This prevent recomputing quatity count unless items change
 */
export const getCartItemsCount = createSelector(
    [getCartItems],
    (items) => {
        return items.reduce((sumQte, item) => sumQte += item.quantity, 0)
    }
)