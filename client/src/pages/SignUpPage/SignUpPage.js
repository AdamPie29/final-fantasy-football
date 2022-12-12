import "./SignUpPage.scss";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from "yup";
import axios from "axios";


function SignUpPage () {

    // set password rules to minimum of 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    
    // prepare schema to initiate validation requirements
    const basicSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter a valid email")
            .required("Required"),
        name: yup
            .string()
            .required("Please enter your name"),
        password: yup
            .string()
            .min(5)
            .matches(passwordRules, {message: "Please create a stronger password"})
            .required("Required"),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords must match").required("Required")

    })

    const onSubmit = async (values, actions) => {
        console.log("submitted");
        await new Promise((resolve) => setTimeout(resolve, 1000));

        //creates new user object
        const newUser = {
            user_name: values.name,
            user_email: values.email,
            user_password: values.password
        }

        // post new user to users table
        axios.post("http://localhost:8080/user/signup", newUser)
        console.log(newUser);
        actions.resetForm();
    }

    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    console.log(errors);

    // console.log(formik);

    return (
        <div className="signup-page">
            <div className="signup-page__form">
                <p className="signup-page__form__title">Sign Up, Coach!</p>
                <div className="formCenter">
                    <form onSubmit={handleSubmit} className="formFields">
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="name">
                            Full Name
                            </label>
                            <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your full name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.name && touched.name ? "input-error" : "formFieldInput"}
                            />
                            {errors.name && touched.name && <p className="error">{errors.name}</p>}
                        </div>
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="email">
                            E-Mail Address
                            </label>
                            <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.email && touched.email ? "input-error" : "formFieldInput"}
                            />
                            {errors.email && touched.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="password">
                            Password
                            </label>
                            <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.password && touched.password ? "input-error" : "formFieldInput"}
                            />
                            {errors.password && touched.password && <p className="error">{errors.password}</p>}
                        </div>
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="confirmPassword">
                            Confirm Password
                            </label>
                            <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Enter your password"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.confirmPassword && touched.confirmPassword ? "input-error" : "formFieldInput"}
                            />
                            {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                        </div>
                        <div className="formField-button">
                            <button disabled={isSubmitting} type="submit" className="formFieldButton">Sign Up</button>
                            <Link to="/login" className="formFieldLink">
                            I'm already a Coach
                            </Link>
                            {isSubmitting && <p className="signedup">Signed up succesfully!</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;