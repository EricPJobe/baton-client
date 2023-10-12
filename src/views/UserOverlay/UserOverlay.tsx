import { useEffect, useState, useContext } from "react";
import Notification from "../../components/Notification/Notification";
import { SocketContext } from '../../config/socket';
import './UserOverlay.css'


function UserOverlay() {
    const socket = useContext(SocketContext);
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        socket.on('client', (msg) => {
            console.log(msg);
            setMessage(msg);
            setIsDisplayed(true);
            setTimeout(() => {
                setIsDisplayed(false);
            }, 5000);
        });

        return () => {
            socket.off('client');
        }
    }, []);

    return (
        <>
            <div className="overlay-container">
                <div className="top-bank">
                    { isDisplayed && <Notification text={message} /> }
                </div>
                <div className="bottom-bank"></div>
            </div>
        </>
    );
}

export default UserOverlay;