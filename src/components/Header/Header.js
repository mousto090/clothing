import React, { useRef, useEffect, useState } from "react";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { firebaseAuth } from "../../firebase";
import { connect } from "react-redux";
import CartButton from "../../UI/CartButton/CartButton";
import CartDropdown from "../../UI/CartDropdown/CartDropdown";

const Header = ({ currentUser }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    //open close dropdown when click on icon
    const dropdownToggleHandler = () => setIsDropdownOpen(!isDropdownOpen);

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
                <div className="container" ref={dropdownRef}>
                    <CartButton dropdownToggleHandler={dropdownToggleHandler} />
                    {isDropdownOpen && <CartDropdown />}
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = state => {
    const { userReducer: { error, isLoading, currentUser } } = state;
    return { error, isLoading, currentUser };
}
export default connect(mapStateToProps)(Header);