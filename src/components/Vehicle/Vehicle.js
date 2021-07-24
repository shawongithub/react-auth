import React from 'react';

const Vehicle = props => {
    console.log(props);
    const { name, image } = props.traffic

    return (
        <div style={{
            width: '200px', height: '210px',
            margin: '5px', padding: '5px', backgroundColor: '#FFFFFF',
            borderRadius: '20px'
        }}>
            <div style={{
                width: '140px', height: '140px',
                margin: 'auto'
            }}>
                <img src={image} alt="" style={{ width: '100%' }} />
            </div>
            <div style={{ width: '160px', height: '30px', margin: 'auto', textAlign: 'center' }}>
                <p>{name}</p>
            </div>
            <div style={{ width: '160px', height: '30px', margin: 'auto', textAlign: 'center' }}>
                <button style={{ border: 'none', background: 'orangeRed', color: 'white', width: '140px' }}>Book Now</button>
            </div>

        </div>

    );
};

export default Vehicle;