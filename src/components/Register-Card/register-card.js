import React from 'react';
import './register-card.css'; // Assuming you have a separate CSS file for styles

const registercard = () => {
  return (
    <div className="ag-format-container">
      <div className="ag-courses_box">
        <div className="ag-courses_item">
          <a href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">
              Register Now!!
            </div>

            <div className="ag-courses-item_date-box">
              Start: 
              <span className="ag-courses-item_date">
                31.01.2024
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default registercard;
