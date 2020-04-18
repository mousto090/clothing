import React from "react";
import classes from "./Checkout.module.scss";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotalPrice } from "../../store/cart/selectors";
import { connect } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const header = ["Product", "Description", "Quantity", "Price", "Remove"];
const headerRow = header.map(title => (
    <div className='headerBlock' key={title}>
        <span>{title}</span>
    </div>
))
const Checkout = ({ items, totalPrice }) => {
    const cartItems = items.length ? items.map(item => <CheckoutItem item={item} key={item.id} />)
        : (<p>Your cart is empty</p>)
    return (
        <div className={classes.checkoutContainer}>
            <div className={classes.checkoutHeader}>
                {headerRow}
            </div>
            {cartItems}
            {items.length ? (<div className={classes.total}>TOTAL: ${totalPrice}</div>) : null}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
    totalPrice: selectCartTotalPrice
});

export default connect(mapStateToProps)(Checkout);