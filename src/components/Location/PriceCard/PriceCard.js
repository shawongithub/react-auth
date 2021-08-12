import React from 'react';
import './PriceCard.css'
const PriceCard = (props) => {

    const { name, image, icon, price, person } = props.details

    return (
        <div className="price-card">
            <div className="image-div">
                <img src={image} width="100%" alt="" />
            </div>
            <div className="name-div">
                <p>{name}</p>
            </div>
            <div className="icon-div">
                <img src={icon} width="100%" alt="" />
            </div>
            <div className="person-div">
                <p>{person}</p>
            </div>
            <div className="price-div">
                <p>${price}</p>
            </div>
        </div>
    );
};

export default PriceCard;