import React from 'react';
import mapImage from '../../images/Map.png'
const Location = () => {
    const style = {
        margin: '5px 100px',
        border: '1px solid red',
        display: 'flex'
    }
    const searchLoactionForm = {
        width: '350px',
        height: '220px',
        border: '1px solid lightGrey',
        marginRight: '20px'
    }
    return (
        <div style={style}>
            <div style={searchLoactionForm}>
                <form >
                    <label htmlFor="pickup">Pick From</label>
                    <input type="text" name="pickup" required />
                    <label htmlFor="destination">Pick To</label>
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