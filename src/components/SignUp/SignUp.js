import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeHandler = e => {
        if (e.target.name === "name") {
            setName(e.target.value)
        }
        if (e.target.name === "email") {
            console.log(e.target.value);
            setEmail(e.target.value)
        }
    }
    const emailValidator = email => {
        console.log(email);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    const signUpHandler = e => {
        e.preventDefault()
        let test = emailValidator(email)
        console.log(test);
        console.log("clicked");
    }
    console.log(email);
    return (
        <div>
            <div className="form-container">
                <form onSubmit={signUpHandler}>
                    <h1>SignUp Here</h1>
                    <input type="text" placeholder="Name" name="name" onChange={changeHandler} required />
                    <input type="text" placeholder="Email" name="email" onChange={changeHandler} required />
                    <input type="password" placeholder="Password" name="password" required />
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" required />
                    <input type="submit" value="Create an account" />
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
            </div>
            <div className="auth-container">
                <div className="line">
                    <div className="sub-line"></div>
                    <div>Or</div>
                    <div className="sub-line"></div>
                </div>
                <input type="submit" value="Continue with facebook" />
                <input type="submit" value="Continue  with  google" />
            </div>
        </div>
    );
};

export default SignUp;