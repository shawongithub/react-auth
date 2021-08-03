import React from 'react';
import { useState } from 'react';
import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom'
import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../../App';

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })
    const blurHandler = e => {

        let isFieldValid = true
        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === "password") {
            isFieldValid = e.target.value.length > 5 && /\d{1}/.test(e.target.value)
        }

        if (isFieldValid) {
            const newUserInfo = { ...userInfo }
            newUserInfo[e.target.name] = e.target.value
            setUserInfo(newUserInfo)
        }
    }
    const submitHandler = event => {
        console.log(loggedInUser);
        if (userInfo.email && userInfo.password) {
            firebase.auth().signInWithEmailAndPassword(userInfo.email, userInfo.password)
                .then((userCredential) => {
                    var user = userCredential.user;
                    const updatedLoggedInUser = { ...loggedInUser }
                    updatedLoggedInUser.email = user.email
                    updatedLoggedInUser.loggedIn = true
                    setLoggedInUser(updatedLoggedInUser)
                    history.replace(from);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                });
        }
        event.preventDefault()
    }

    return (
        <div>
            <div className="login-form-container">
                <form onSubmit={submitHandler}>
                    <h1>Login Here</h1>
                    <input type="text" placeholder="Email" name="email" onBlur={blurHandler} required />
                    <input type="password" placeholder="Password" name="password" onBlur={blurHandler} required />
                    <input type="submit" value="Login" />
                    <p>Don't have an account? <Link to="/signup">SignUp</Link></p>
                </form>
            </div>
            <div className="login-auth-container">
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

export default Login;