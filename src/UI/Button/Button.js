import React from "react";
import classes from "./Button.module.scss";
import clsx from "clsx";

const Button = ({ children, buttonType, ...otherProps }) => {
    const classNames = clsx(classes.button, { [classes.google]: buttonType === 'google' });
    console.log(classNames);
    
    return (
        <button className={classNames} {...otherProps}>
            {children}
        </button>
    );
}

export default Button;