import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <h2>City Travellers</h2>
            <nav>
                <a href="">Home</a>
                <a href="">Destination</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
                <a href="">Login</a>
            </nav>
        </div>
    );
};

export default Header;