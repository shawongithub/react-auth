import React from 'react';
import './SignUp.css'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig'

firebase.initializeApp(firebaseConfig);

const SignUp = () => {
    let history = useHistory()
    const [userInfo, setUserInfo] = useState({
        isSignedIn: false,
        name: '',
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
        if (e.target.name === "confirmPassword") {
            const isFieldValid = e.target.value === userInfo.password
            if (!isFieldValid) {
                alert("please enter the same  password")
                e.target.value = null
            }
        }
        if (isFieldValid) {
            const newUserInfo = { ...userInfo }
            newUserInfo[e.target.name] = e.target.value
            setUserInfo(newUserInfo)
        }
    }

    const signUpHandler = e => {
        e.preventDefault()

        if (userInfo.email && userInfo.password) {

            firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
                .then((userCredential) => {

                    var user = userCredential.user;
                    updateUserName(userInfo.name)
                    console.log(user);
                    history.push('/login')
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);

                });
        }
    }
    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(() => {
            console.log("user name updated successfully");

        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>

            <div className="form-container">
                <form onSubmit={signUpHandler}>
                    <h1>SignUp Here</h1>
                    <input type="text" placeholder="Name" name="name" onBlur={blurHandler} required />
                    <input type="text" placeholder="Email" name="email" onBlur={blurHandler} required />
                    <input type="password" placeholder="Password" name="password" onBlur={blurHandler} required />
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" onBlur={blurHandler} required />
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