import React from "react";
import classes from "./MenuItem.module.scss";
import clsx from "clsx";

const MenuItem = ({ size, imageUrl, title }) => {
    return (
        <div className={clsx(classes.menuItem, size && classes.large)}>
            <div className={classes.backgroundImage} style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className={classes.content}>
                <h1 className={classes.title}>{title.toUpperCase()}</h1>
                <span className={classes.subtitle}>SHOP NOW</span>
            </div>
        </div>
    )
}


export default MenuItem;