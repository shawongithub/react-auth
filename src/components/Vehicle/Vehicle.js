import React from 'react';
import { Link } from 'react-router-dom'
import './Vehicle.css'

const Vehicle = props => {

    const { name, image, id } = props.traffic
    let link = `/location/${id}`

    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt="" style={{ width: '100%' }} />
            </div>
            <div className="card-text">
                <p>{name}</p>
            </div>
            <div className="card-text">
                <Link to={link}><button className="book-button">Book Now</button></Link>
            </div>

        </div>

    );
};

export default Vehicle;