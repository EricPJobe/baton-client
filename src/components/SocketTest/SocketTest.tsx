import { useState, useEffect } from 'react';
import { socket } from '../../config/socket';

import './SocketTest.css';

function SocketTest() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [testEvents, setTestEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState("");
    
    useEffect(() => {
        
        const onConnect = () => {
            setIsConnected(true);
        };

        const onDisconnect = () => {
            setIsConnected(false);
        };

        const onTestEvent = (value: any) => {
            setTestEvents(prev => [...prev, value] as never[]);
        };

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('test', onTestEvent);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('test', onTestEvent);
        };

    }, []);

    const onTest = () => {
        setIsLoading(true);
        console.log(value);
        socket.emit('test-channel', value, () => {
            setIsLoading(false);
        });
    }

    return (
        <>
            <div className="testContainer">
                <input onChange={ e => setValue(e.target.value) } />
                <button type="button" className="testButton" onClick={ e => {
                    e.preventDefault();
                    onTest(); 
                } }>Test</button>
            </div>    
        </>
    );
}

export default SocketTest;

