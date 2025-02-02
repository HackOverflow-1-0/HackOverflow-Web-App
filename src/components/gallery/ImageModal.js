// ImageModal.js

import React from "react";

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={imageUrl} alt="Large Image" />
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
