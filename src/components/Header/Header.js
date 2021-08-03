import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App';
import { useContext } from 'react';

const Header = () => {

    const [loggedInUser] = useContext(UserContext)
    let link = loggedInUser.loggedIn ? <Link to='/logout'>Logout</Link> : <Link to='/login'>Login</Link>
    return (
        <div className="header-background">
            <div className="header-container">
                <h2>City Travellers</h2>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/destination'>Destination</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Contact</Link>
                    {link}
                </nav>
            </div>

        </div>
    );
};

export default Header;