import React from 'react';
import './PriceCard.css'
const PriceCard = (props) => {
    console.log(props);
    console.log(props.details);
    return (
        <div className="price-card">
            <h1>Price 50</h1>
        </div>
    );
};

export default PriceCard;