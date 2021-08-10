import React from 'react';
import mapImage from '../../images/Map.png'
import './Location.css'
const Location = () => {

    return (
        <div className="search-location-container">
            <div className="search-location-form">
                <form >
                    <label htmlFor="pickup">Pick From</label>
                    <br />
                    <input type="text" name="pickup" required />
                    <br />
                    <label htmlFor="destination">Pick To</label>
                    <br />
                    <input type="text" name="destination" required />
                    <input type="submit" value="Search" />
                </form>
            </div>
            <div>
                <img src={mapImage} alt="" style={{ width: '80%' }} />
            </div>
        </div>
    );
};

export default Location;