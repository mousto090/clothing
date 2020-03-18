import React from "react";
import classes from "./SigninForm.module.scss";
import Input from "../../UI/Input/Input";
import { withFormik } from "formik";
import Button from "../../UI/Button/Button";
import { signinWithGoogle, firebaseAuth } from "../../firebase";
import { validatePassword, valiateEmail } from "../../utils/validationRules";

const SigninForm = ({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => {

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
                    error={errors.email && touched.email && errors.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <Input type="password" name="password" id="passwod"
                    label="Password"
                    autoComplete="new-password" //off on the form not working in chrome
                    value={values.password}
                    error={errors.password && touched.password && errors.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <div className={classes.buttons}>
                    <Button type="submit">Submit</Button>
                    <Button type="button" onClick={signinWithGoogle} className="google">
                        Sign in with Google
                    </Button>
                </div>
            </form>
        </div>
    );
}

const singinFormik = withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),
    handleSubmit: async ({ email, password }, formikBag) => {
        try {
            await firebaseAuth.signInWithEmailAndPassword(email, password);
            formikBag.resetForm();
        } catch (error) {
            console.log(error);
            formikBag.setErrors({ password: error.message })
        }
    },
    validate: ({ email, password }) => {
        const errors = {
            email: valiateEmail(email),
            password: validatePassword(password),
        }
        //form is valid when all fields of errors object is false
        return Object.values(errors).every(v => !v) ? {} : errors;
    },
    //set these two to false to validate only on submit
    // validateOnBlur: false,
    // validateOnChange: false
});
export default singinFormik(SigninForm);