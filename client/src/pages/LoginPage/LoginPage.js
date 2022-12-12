import "./LoginPage.scss";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from "yup";
import { useState } from 'react';
import axios from "axios";

function LoginPage() {

    const [error, setError] = useState(false);
    const navigate = useNavigate();

    // set password rules to minimum of 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    
    // prepare schema to initiate validation requirements
    const basicSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter a valid email")
            .required("Required"),
        password: yup
            .string()
            .min(5)
            .matches(passwordRules, {message: "Please enter a valid password"})
            .required("Required"),
    })

    const onSubmit = async (values, actions) => {
        console.log("submitted");
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // creates user object
        const user = {
            user_email: values.email,
            user_password: values.password
        }

        // post to login route
        axios.post("http://localhost:8080/user/login", user)
            .then ((response)=> {
                sessionStorage.setItem("token", response.data.token);
                navigate("/")
            })
            .catch((err) => {
                console.log(err);
                setError(true)
            })
            
        actions.resetForm();
    }

    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    // console.log(errors);

    console.log(values);
    return (
        <div className="login-page">
            <div className="login-page__form">
                <p className="login-page__form__title">Login, Coach!</p>
                <div className="formCenter">
                    <form onSubmit={handleSubmit} className="formFields">
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
                        <div className="formField-button">
                            <button disabled={isSubmitting} type="submit" className="formFieldButton">Log in</button>
                            <Link to="/signup" className="formFieldLink">
                            I'm not a Coach yet
                            </Link>
                            {isSubmitting && <p className="signedup">Logged in succesfully!</p>}
                            {error && <div className="login__message">Failed to login</div>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;