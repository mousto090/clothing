import React from "react";
import classes from "./CartDropdown.module.scss";
import Button from "../Button/Button";

const CartDropdown = () => {
    return (
        <div className={classes.cartDropdown} >
            <div className={classes.cartItems} />
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}


export default CartDropdown;