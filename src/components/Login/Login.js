import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <div className="login-form-container">
                <form>
                    <h1>Login Here</h1>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
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