import React from "react";
import classes from "./Auth.module.scss";
import SigninForm from "../../components/SinginForm/SigninForm";

const Auth = () => {
  return (
    <div className={classes.auth}>
      <SigninForm />
    </div>
  );
};

export default Auth;
