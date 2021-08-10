import React from 'react';
import mapImage from '../../images/Map.png'
import './Location.css'
import { useState } from 'react';


const Location = () => {
    const [searched, setSearched] = useState(false)
    const submitHandler = event => {
        event.preventDefault()
        setSearched(true)
    }
    let locationDiv = searched ? <div>
        <div className="fare-details-container">
        </div>
    </div> :
        <div className="search-location-form">
            <form onSubmit={submitHandler} >
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

    return (
        <div className="search-location-container">
            {locationDiv}
            <div>
                <img src={mapImage} alt="" style={{ width: '100%' }} />
            </div>
        </div>
    );
};

export default Location;