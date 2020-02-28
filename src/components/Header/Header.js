import React from "react";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/logo.svg";

const Header = () => {
    return (
        <div className={classes.header}>
            <Link to="/" className={classes.logoContainer}>
                <Logo className={classes.logo}/>
            </Link>
            <nav className={classes.navLinks}>
                <Link to="/shop" className={classes.navLink}>SHOP</Link>
                <Link to="/shop" className={classes.navLink}>CONTACT</Link>
            </nav>
        </div>
    )
}

export default Header;