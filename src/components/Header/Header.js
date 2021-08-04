import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App';
import { useContext } from 'react';

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let link = loggedInUser.loggedIn ? <button className="button" onClick={() => setLoggedInUser({})}>Logout</button> : <Link to='/login'>Login</Link>

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