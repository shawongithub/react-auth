import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <h2><i>City Travellers</i></h2>
            <nav>
                <a href="">home</a>
                <a href="">login</a>
                <a href="">contact</a>
            </nav>
        </div>
    );
};

export default Header;