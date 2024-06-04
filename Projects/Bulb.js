import React from 'react';
import './Bulb.css'; // Import CSS file for styling

function Bulb() {
  return (
    <div className="bulb-container">
      <span className="text">Hover over me!</span>
      <img className="bulb" src="bulb_icon.png" alt="Bulb" />
    </div>
  );
}

export default Bulb;