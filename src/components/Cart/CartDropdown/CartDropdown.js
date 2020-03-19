import React from "react";
import classes from "./CartDropdown.module.scss";
import Button from "../../../UI/Button/Button";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";

const CartDropdown = ({items}) => {
    return (
        <div className={classes.cartDropdown} >
            <div className={classes.cartItems}>
                {items.map(item=> <CartItem key={item.id} item={item}/>)}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

const mapStateToProps = state => {
    const { cartReducer: { items } } = state
    return { items };
};

export default connect(mapStateToProps)(CartDropdown);