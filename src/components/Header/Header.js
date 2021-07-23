import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-container">
            <h2>City Travellers</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/destination'>Destination</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/login'>Login</Link>
            </nav>
        </div>
    );
};

export default Header;