import "./SignUpPage.scss";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';


function SignUpPage () {

    <Formik 
        initialValues={{name: '', email: '', password: ''}}
        validate={values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = "invalid email address";
            }
            return errors;
        }}
    />

    return (
        <div className="signup-page">
            <div className="signup-page__form">
                <p className="signup-page__form__title">Sign Up, Coach!</p>
                <div className="formCenter">
                    <Formik 
                        initialValues={{name: '', email: '', password: ''}}
                        validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                        errors.email = "invalid email address";
                        }
                        return errors;
                        }}
                        onSubmit={(values, { setSubmitting })=> {
                            setTimeout(()=> {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ isSubmitting })=> (
                            <Form onSubmit="" className="formFields">
                                <div className="formField">
                                    <label className="formFieldLabel" htmlFor="name">
                                    Full Name
                                    </label>
                                    <Field
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="formFieldInput"
                                    placeholder="Enter your full name"
                                    />
                                    <ErrorMessage name="name" component="div" />
                                </div>
                                <div className="formField">
                                    <label className="formFieldLabel" htmlFor="email">
                                    E-Mail Address
                                    </label>
                                    <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="formFieldInput"
                                    placeholder="Enter your email"
                                    />
                                    <ErrorMessage name="email" component="div" />
                                </div>
                                <div className="formField">
                                    <label className="formFieldLabel" htmlFor="password">
                                    Password
                                    </label>
                                    <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="formFieldInput"
                                    placeholder="Enter your password"
                                    />
                                    <ErrorMessage name="password" component="div" />
                                </div>
                                <div className="formField-button">
                                    <button type="submit" disabled={isSubmitting} className="formFieldButton">Sign Up</button>
                                    <Link to="/login" className="formFieldLink">
                                    I'm already a Coach
                                    </Link>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;