import React from "react";
import classes from "./Input.module.scss";
import clsx from "clsx";

const Input = ({ handleChange, label, ...otherProps }) => {
    const { value } = otherProps;

    return (
        <div className={classes.group}>
            <input className={classes.formInput} onChange={handleChange} {...otherProps} />
            <label className={clsx(classes.inputLabel, value && classes.shrink)}>{label}</label>
        </div>
    )
}

export default Input;