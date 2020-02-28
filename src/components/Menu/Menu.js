import React from "react";
import { SECTIONS } from "../../data/homeData";
import MenuItem from "../MenuItem/MenuItem";
import classes from "./Menu.module.scss";

const Menu = () => {
    return (
        <div className={classes.menu}>
            {SECTIONS.map(({ id, size, imageUrl, title }) =>
                <MenuItem key={id} size={size} imageUrl={imageUrl} title={title} />)
            }
        </div>
    );
}


export default Menu;