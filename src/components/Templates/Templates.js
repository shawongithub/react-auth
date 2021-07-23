import React from 'react';
import background from '../../images/Bg.png'
import { traffics } from '../../fakeData/traffics';
import Vehicle from '../Vehicle/Vehicle';
import './Templates.css'

const Templates = () => {
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: '800px'
    }
    console.log(traffics);
    return (
        <div style={backgroundStyle} >
            <span style={{ color: '#C1EEFA' }}>n</span>
            <div style={{ width: '70%', position: 'absolute', top: 'calc(50% - 100px)', left: 'calc(50% - 472px)' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {
                        traffics.map(traffic => <Vehicle traffic={traffic} key={traffic.key} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default Templates;