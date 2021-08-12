import React from 'react';
import mapImage from '../../images/Map.png'
import './Location.css'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PriceCard from './PriceCard/PriceCard';
import { priceDetails } from '../../fakeData/priceDetails';
const Location = () => {
    const { id } = useParams()
    const detailInfo = priceDetails.filter(data => data.vehicleId === parseInt(id))
    const detailInfoArray = detailInfo[0].details
    const [searched, setSearched] = useState(false)
    const [location, setLocation] = useState({
        start: '',
        end: ''
    })
    const submitHandler = event => {
        event.preventDefault()
        setSearched(true)
    }
    const blurHandler = event => {
        if (event.target.name === "pickup") {
            let updatedLocation = { ...location }
            updatedLocation.start = event.target.value
            setLocation(updatedLocation)
        }
        if (event.target.name === "destination") {
            let updatedLocation = { ...location }
            updatedLocation.end = event.target.value
            setLocation(updatedLocation)
        }
    }

    let locationDiv = searched ? <div>
        <div className="fare-details-container">
            <div className="location">

                <div className="vertical-line"></div>
                <div className="starting-point">
                    <h4>{location.start}</h4>
                </div>
                <div className="end-point">
                    <h4>{location.end}</h4>
                </div>


            </div>
            {
                detailInfoArray.map(data => <PriceCard details={data} key={data.objId} />)
            }

        </div>
    </div> :
        <div className="search-location-form">
            <form onSubmit={submitHandler} >
                <label htmlFor="pickup">Pick From</label>
                <br />
                <input type="text" name="pickup" onBlur={blurHandler} required />
                <br />
                <label htmlFor="destination">Pick To</label>
                <br />
                <input type="text" name="destination" onBlur={blurHandler} required />
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