import React, { Component } from "react";
import classes from "./Auth.module.scss";
import SigninForm from "../../components/SinginForm/SigninForm";

class Auth extends Component {
    render() {
        return (
            <div className={classes.auth}>
                <SigninForm />
            </div>
        );
    }
}

export default Auth;