import React from "react";
import classes from "./SigninForm.module.scss";
import Input from "../../UI/Input/Input";
import { withFormik } from "formik";
import Button from "../../UI/Button/Button";

const SigninForm = ({ values, handleChange, handleSubmit }) => {

    // const handleSubmit= ()=>{

    // }
    return (
        <div className={classes.signinForm}>
            <h2 className={classes.title}>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form noValidate autoComplete="off" id="signin-form" onSubmit={handleSubmit}>
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
                <Button type="submit">Submit</Button>
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