import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom'
const SignUp = () => {
    return (
        <div>
            <div className="form-container">
                <form>
                    <h1>SignUp Here</h1>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
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