import React from "react";
import classes from "./SignupForm.module.scss";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { withFormik } from "formik";
import { valiateEmail, validateRequired, validatePassword, validatePasswordMatch } from "../../utils/validationRules";
import { firebaseAuth, createUser } from "../../firebase";

const SignupForm = ({ values, errors, handleChange, handleSubmit }) => {
    return (
        <div className={classes.singupForm}>
            <h2 className={classes.title}>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form id='sign-up-form' noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Input
                    type='text'
                    name='displayName'
                    value={values.displayName}
                    error={errors.displayName}
                    onChange={handleChange}
                    label='Display Name'
                />
                <Input
                    type='email'
                    name='email'
                    value={values.email}
                    error={errors.email}
                    onChange={handleChange}
                    label='Email'
                />
                <Input
                    type='password'
                    name='password'
                    value={values.password}
                    error={errors.password}
                    onChange={handleChange}
                    label='Password'
                    autoComplete="new-password" //off on the form not working in chrome
                />
                <Input
                    type='password'
                    name='confirmPassword'
                    value={values.confirmPassword}
                    error={errors.confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                />
                <Button type='submit'>SIGN UP</Button>
            </form>

        </div>
    );
}

const SingupFormiK = withFormik({
    mapPropsToValues: () => ({ displayName: '', email: '', password: '', confirmPassword: '' }),
    handleSubmit: async (values, formikBag) => {
        const { displayName, email, password } = values;
        try {
            const { user } = await firebaseAuth.createUserWithEmailAndPassword(email, password);
            console.log(user);
            await createUser(user, { displayName });
            formikBag.resetForm();
        } catch (error) {
            console.log(error);
        }

    },
    validate: ({ displayName, email, password, confirmPassword }) => {
        const errors = {
            displayName: validateRequired(displayName),
            email: valiateEmail(email),
            password: validatePassword(password),
            confirmPassword: validatePasswordMatch(password, confirmPassword)
        };
        //form is valid when all fields of errors object is false
        return Object.values(errors).every(v => !v) ? {} : errors;
    },
    //set these two to false to validate only on submit
    validateOnBlur: false,
    validateOnChange: false
});

export default SingupFormiK(SignupForm);