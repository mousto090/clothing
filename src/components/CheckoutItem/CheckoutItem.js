import React from "react";
import classes from "./CheckoutItem.module.scss";

const CheckoutItem = ({ item }) => {
    const { imageUrl, name, quantity, price } = item;
    return (
        <div className={classes.checkoutItem}>
            <div className={classes.imageContainer}>
                <img src={imageUrl} alt={name} />
            </div>
            <span className={classes.name}>{name}</span>
            <span className={classes.quantity}>{quantity}</span>
            <span className={classes.price}>{price}</span>
            <div className={classes.removeButton}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;