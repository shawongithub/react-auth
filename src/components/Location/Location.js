import React from 'react';
import mapImage from '../../images/Map.png'
import './Location.css'
import { Link } from 'react-router-dom'

const Location = () => {
    const submitHandler = event => {
        event.preventDefault()
    }
    return (
        <div className="search-location-container">
            <div className="search-location-form">
                <form onSubmit={submitHandler} >
                    <label htmlFor="pickup">Pick From</label>
                    <br />
                    <input type="text" name="pickup" required />
                    <br />
                    <label htmlFor="destination">Pick To</label>
                    <br />
                    <input type="text" name="destination" required />
                    <Link to="/landing-place"><input type="submit" value="Search" /></Link>
                </form>
            </div>
            <div>
                <img src={mapImage} alt="" style={{ width: '100%' }} />
            </div>
        </div>
    );
};

export default Location;