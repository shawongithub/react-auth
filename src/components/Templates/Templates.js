import React from 'react';
import background from '../../images/Bg.png'
import { traffics } from '../../fakeData/traffics';
import Vehicle from '../Vehicle/Vehicle';
import './Templates.css'

const Templates = () => {
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: '800px',
        display: 'flex',
        alignItems: 'center',
    }
    console.log(traffics);
    return (
        <div style={backgroundStyle} >
            <div style={{ margin: '100px' }}>
                <span style={{ color: '#C1EEFA' }}>n</span>
                <div className="row">
                    {
                        traffics.map(traffic => <Vehicle traffic={traffic} key={traffic.key} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default Templates;