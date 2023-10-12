import { useContext, useEffect } from "react";
import ActionButton from "../../components/ActionButton/ActionButton";
import { SocketContext } from "../../config/socket";
import './AdminOverlay.css'

function AdminOverlay() {
    const socket = useContext(SocketContext);
    const songParts = ['Intro', 'Chorus', 'Verse 1', 'Verse 2', 'Bridge', 'End']

    const handleMessage = (message: string) => {
        console.log(message);    
        socket.emit('admin', message);
    };

    return (
        <>
        <div className="overlay-container">
            <div className="left-bank"></div>
            <div className="right-bank">
                { songParts.map( part => <ActionButton key={part} text={part} onClick={() => handleMessage(part)} /> ) }
            </div>
        </div>
        </>
    );
}

export default AdminOverlay;