import React, { useEffect } from 'react';


let messages = []
function Message({message}) {
    useEffect(() => {
        if ( message.message ){
            messages.push(JSON.stringify(message));
        }
      }, [message]);

    return (
        <div>{messages}</div>
    );

}

export default Message