import React from 'react';
import background from '../../images/Bg.png'
const Templates = () => {
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: '800px'
    }
    return (
        <div style={backgroundStyle} >
            <div style={{ marginTop: '0px' }}>
                <span style={{ color: '#88def4' }}>no top margin</span>

            </div>
        </div>
    );
};

export default Templates;