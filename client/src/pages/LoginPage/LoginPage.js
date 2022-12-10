import "./LoginPage.scss";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';

function LoginPage() {

    return (
        <div className="login-page">
            <div className="login-page__form">
                <p className="login-page__form__title">Login, Coach!</p>
                <div className="formCenter">
                    <form onSubmit="" className="formFields">
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="email">
                            E-Mail Address
                            </label>
                            <input
                            type="email"
                            id="email"
                            className="formFieldInput"
                            placeholder="Enter your email"
                            name="email"
                            value=""
                            onChange=""
                            />
                        </div>
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="password">
                            Password
                            </label>
                            <input
                            type="password"
                            id="password"
                            className="formFieldInput"
                            placeholder="Enter your password"
                            name="password"
                            value=""
                            onChange=""
                            />
                        </div>
                        <div className="formField-button">
                            <button className="formFieldButton">Log in</button>{" "}
                            <Link to="/signup" className="formFieldLink">
                            I'm not a Coach yet
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;