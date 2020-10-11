import React, { useEffect, useRef, useState } from 'react';
import Message from './Message';
const URL = 'ws://localhost:3001/websocket'


 
   
    function Screen() {
        

        const ws = useRef(null);
        const [message, setMessage] = useState({});

        const [search, setSearch] = useState('baseball');
        const [delay, setDelay] = useState(5000);
        const [id, setId] = useState(5000);

        const [removeId, setRemoveId] = useState(5000);
    
        useEffect(() => {
            ws.current = new WebSocket(URL);
            ws.current.onopen = () => console.log("ws opened");
            ws.current.onclose = () => console.log("ws closed");
    
            return () => {
                ws.current.close();
            };
        }, []);
    
        useEffect(() => {
            if (!ws.current) return;
    
            ws.current.onmessage = e => {
                setMessage(JSON.parse(e.data));
            };
        }, [message]);

        const handleDelete = (evt) => {
            evt.preventDefault();
            let result = {
                name: '',
                seconds: '',
                id: removeId
            }
            setRemoveId(0)
            ws.current.send(JSON.stringify(result))
        }

        const handleSubmit = (evt) => {
            evt.preventDefault();
           
            let result = {
                name: search,
                seconds: delay,
                id
            }
            setSearch('')
            setDelay(0)
            setId(0)
            ws.current.send(JSON.stringify(result))
        }
    
    
        return (
            <>
            <form onSubmit={handleSubmit}>
                <label>
              Request:
              <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
              Delay:
              <input type="text" value={delay} onChange={e => setDelay(e.target.value)} />
              ID:
              <input type="text" value={id} onChange={e => setId(e.target.value)} />
                </label>
                <input type="submit" value="Send" />
             </form>

             <form onSubmit={handleDelete}>
             <label>
              Request:
              <input type="text" value={removeId} onChange={e => setRemoveId(e.target.value)} />
              </label>
                <input type="submit" value="Send" />
             </form>
             
            <Message id={id} message={message}></Message>
            
            </>
        );
    }
  
      export default Screen;