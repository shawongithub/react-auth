import React from 'react';
import background from '../../images/Bg.png'
import { traffics } from '../../fakeData/traffics';
const Templates = () => {
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: '800px'
    }
    console.log(traffics);
    return (
        <div style={backgroundStyle} >
            <div>
                <span style={{ color: '#88def4' }}>no empty space for background</span>
                {
                    traffics.map(traffic => {
                        return (<div>
                            <p>{traffic.id}</p>
                            <h1>{traffic.name}</h1>
                            <img src={traffic.image} alt="" />
                        </div>)
                    })
                }

            </div>
        </div>
    );
};

export default Templates;