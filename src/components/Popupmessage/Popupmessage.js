import React from "react";

const PopupMessage = ({ onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup">
                <h3>Oops! It looks like you're not logged in</h3>
                <p>Please log in to your wallet and try again.</p>
                <button onClick={onClose}>Dismiss</button>
            </div>
        </div>
    );
};

export default PopupMessage;
