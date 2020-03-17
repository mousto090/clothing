import React from "react";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import {firebaseAuth} from "../../firebase";
import { connect } from "react-redux";

const Header = ({ currentUser }) => {

    let singInSignoutLink = <Link to="/auth" className={classes.navLink}>SIGN IN</Link>;

    if (currentUser) {
        singInSignoutLink = (
            <Link to="/auth" className={classes.navLink}
                onClick={() => firebaseAuth.signOut()}>
                SIGN OUT
            </Link>
        )
    }
    return (
        <div className={classes.header}>
            <Link to="/" className={classes.logoContainer}>
                <Logo className={classes.logo} />
            </Link>
            <nav className={classes.navLinks}>
                <Link to="/shop" className={classes.navLink}>SHOP</Link>
                <Link to="/shop" className={classes.navLink}>CONTACT</Link>
                {singInSignoutLink}
            </nav>
        </div>
    )
}

const mapStateToProps = state => {
    const { userReducer: { error, isLoading, currentUser } } = state;
    return { error, isLoading, currentUser };
  }
export default connect(mapStateToProps)(Header);