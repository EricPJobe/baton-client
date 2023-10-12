import './Notification.css'

function Notification({ text }: { text: String }) {

    return (
        <>
            <div className="notification-area">
                <div className="notification-text">{text}</div>
            </div>
        </>
    );
}

export default Notification;