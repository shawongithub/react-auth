import React from 'react';
import './Vehicle.css'

const Vehicle = props => {
    console.log(props);
    const { name, image } = props.traffic

    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt="" style={{ width: '100%' }} />
            </div>
            <div className="card-text">
                <p>{name}</p>
            </div>
            <div className="card-text">
                <button className="book-button">Book Now</button>
            </div>

        </div>

    );
};

export default Vehicle;