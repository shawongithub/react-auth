import React from 'react';
import background from '../../images/Bg.png'
import { traffics } from '../../fakeData/traffics';
import Vehicle from '../Vehicle/Vehicle';
import './Home.css'

const Templates = () => {
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: '800px'
    }

    return (
        <div style={backgroundStyle} >

            <div style={{ width: '70%', position: 'absolute', top: 'calc(50% - 100px)', left: 'calc(50% - 472px)' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {
                        traffics.map(traffic => <Vehicle traffic={traffic} key={traffic.id} />)
                    }
                </div>

            </div>

        </div>
    );
};

export default Templates;