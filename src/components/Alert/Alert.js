import React from "react";

function Modal({ message, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h5>{message}</h5>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;