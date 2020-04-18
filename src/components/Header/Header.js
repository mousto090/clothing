import React, { useRef, useEffect, useState } from "react";
import classes from "./Header.module.scss";
import { Link, useHistory, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { firebaseAuth } from "../../firebase";
import { connect } from "react-redux";
import CartButton from "../Cart/CartButton/CartButton";
import CartDropdown from "../Cart/CartDropdown/CartDropdown";
import { selectCurrentUser, selectUserIsLoading, selectUserError } from "../../store/user/selectors";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const checkoutPath = '/checkout';

    const dropdownToggleHandler = () => setIsDropdownOpen(!isDropdownOpen);

    const checkoutHandler = () => {
        //close drpdwn
        dropdownToggleHandler();
        if (location.pathname !== checkoutPath) {
            history.push(checkoutPath)
        }
    }

    //use ref to close dropdown on click outside of its container
    const dropdownRef = useRef(null);
    const handleClickAway = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false)
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickAway);
        //unbind mousedown listener
        return () => {
            document.removeEventListener("mousedown", handleClickAway);
        }
    })

    return (
        <div className={classes.header}>
            <Link to="/" className={classes.logoContainer}>
                <Logo className={classes.logo} />
            </Link>
            <nav className={classes.navLinks}>
                <Link to="/shop" className={classes.navLink}>SHOP</Link>
                <Link to="/shop" className={classes.navLink}>CONTACT</Link>
                {
                    currentUser ? (
                        <Link to="/auth" className={classes.navLink}
                            onClick={() => firebaseAuth.signOut()}>
                            SIGN OUT
                        </Link>
                    ) : (<Link to="/auth" className={classes.navLink}>SIGN IN</Link>)
                }
                <div className="container" ref={dropdownRef}>
                    <CartButton dropdownToggleHandler={dropdownToggleHandler} />
                    {isDropdownOpen && <CartDropdown checkoutHandler={checkoutHandler} />}
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    error: selectUserError, 
    isLoading: selectUserIsLoading
})
export default connect(mapStateToProps)(Header);