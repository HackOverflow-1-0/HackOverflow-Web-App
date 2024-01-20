// WinnerCard.js
import React from 'react';
import './WinnerCard.css';

import image1 from "../../assets/img/Events/college-club-events-23/image1.webp";
import image2 from "../../assets/img/Events/college-club-events-23/image2.webp";
import image3 from "../../assets/img/Events/college-club-events-23/image3.webp";

const WinnerCard = () => {
  return (
    <div>
      <div class="container mx-auto my-8 text-center">
        <h1 class="text-4xl font-bold mb-4" id="orange-pink">Winners of Hackoverflow 1.0</h1>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="curtain-panel curtain-left"></div>
          <div className="curtain-panel curtain-right"></div>
          <div className="card-content">
            {/* Your content here */}
            <img src={image1} alt="Card Image" />
          </div>
        </div>

        <div className="card">
          <div className="curtain-panel curtain-left card2"></div>
          <div className="curtain-panel curtain-right card2"></div>
          <div className="card-content">
            {/* Your content here */}
            <img src={image2} alt="Card Image" />
          </div>
        </div>

        <div className="card">
          <div className="curtain-panel curtain-left card3"></div>
          <div className="curtain-panel curtain-right card3"></div>
          <div className="card-content">
            {/* Your content here */}
            <img src={image3} alt="Card Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
