import React from "react";
import { homeSections } from "../../data/AppData";
import MenuItem from "../MenuItem/MenuItem";
import classes from "./Menu.module.scss";

const Menu = () => {
    return (
        <div className={classes.menu}>
            {homeSections.map(({ id, size, imageUrl, title }) =>
                <MenuItem key={id} size={size} imageUrl={imageUrl} title={title} />)
            }
        </div>
    );
}


export default Menu;