import { MouseEventHandler } from 'react';
import './ActionButton.css'

function ActionButton({ text, onClick }: { text: string, onClick: MouseEventHandler }) {
    return (
        <>
            <div className="button-area" onClick={onClick}>
                <div className="button-text">{text}</div>
            </div>
        </>
    );
}

export default ActionButton;