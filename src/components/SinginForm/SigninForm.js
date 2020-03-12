import React from "react";
import classes from "./SigninForm.module.scss";
import Input from "../../UI/Input/Input";
import { withFormik } from "formik";
import Button from "../../UI/Button/Button";
import { signinWithGoogle } from "../../firebase";

const SigninForm = ({ values, handleChange, handleSubmit }) => {

    // const handleSubmit= ()=>{

    // }
    return (
        <div className={classes.signinForm}>
            <h2 className={classes.title}>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form id="signin-form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Input type="email" name="email" id="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                />
                <Input type="password" name="password" id="passwod"
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                    autoComplete="new-password" //off on the form not working in chrome
                />
                <div className={classes.buttons}>
                    <Button type="submit">Submit</Button>
                    <Button type="button" onClick={signinWithGoogle}
                        buttonType="google">
                        Sign in with Google
                    </Button>
                </div>
            </form>
        </div>
    );
}

const singinFormik = withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),
    handleSubmit: (values, formikBag) => {
        console.log(values, formikBag);

    },
});
export default singinFormik(SigninForm);