import React from "react";
import classes from "./Auth.module.scss";
import SigninForm from "../../components/SinginForm/SigninForm";
import SignupForm from "../../components/SignupForm/SignupForm";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Auth = ({ currentUser }) => {
    //TO DO: handle this with unauthenticated HOC component 
    //(also this flash auth page )
    if (currentUser) {
        return <Redirect to="/" />
    }
    
    return (
        <div className={classes.authContainer}>
            <SigninForm />
            <SignupForm />
        </div>
    );
};

const mapStateToProps = state => {
    const { userReducer: { currentUser } } = state;
    return { currentUser };
}
export default connect(mapStateToProps)(Auth);
