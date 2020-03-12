import React from "react";
import classes from "./Auth.module.scss";
import SigninForm from "../../components/SinginForm/SigninForm";
import SignupForm from "../../components/SignupForm/SignupForm";

const Auth = () => {
    return (
        <div className={classes.authContainer}>
            <SigninForm />
            <SignupForm />
        </div>
    );
};

export default Auth;
