import React from 'react';
import mapImage from '../../images/Map.png'
import './LandingPlace.css'
const LandingPlace = () => {
    return (
        <div className="landing-place-container">
            <div className="fare-details-container">
            </div>
            <div className="map-container">
                <img src={mapImage} alt="" style={{ width: '100%' }} />
            </div>
        </div>
    );
};

export default LandingPlace;