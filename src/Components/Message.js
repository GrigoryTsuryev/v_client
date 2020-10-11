import React, { useEffect } from 'react';
import Gif from './Gif';

let messages = []
function Message({message}) {
    useEffect(() => {
        if ( message.message ){
            messages.push(JSON.stringify(message));
        }
      }, [message]);
     
    return (
        <div>
         {messages.map((ms, index) =><Gif key={index} url={JSON.parse(ms).message.image}/>)}
       </div>
    );

}

export default Message