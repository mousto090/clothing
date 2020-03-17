import React from "react";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import classes from "./CartButton.module.scss";

const CartButton = ({dropdownToggleHandler}) => {
    return (
        <div className={classes.cartIcon} onClick={dropdownToggleHandler}>
            <ShoppingBagIcon className={classes.shoppingIcon}/>
            <span className={classes.itemCount}>0</span>
        </div>
    )
}

export default CartButton;