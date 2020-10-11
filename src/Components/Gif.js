import React from 'react';
import GifLoader from 'react-gif-loader';
 
function Gif({url}) {
        return (
            
            <GifLoader
                loading={true}
                imageSrc={`${url}`} 
                style={{display: 'flex' , "flex-direction": "column"}} 
                overlayBackground="rgba(0,0,0,0.5)"
            />
        );
    
}

export default Gif