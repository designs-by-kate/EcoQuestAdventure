import React from 'react';

// Import badge images
import Badge from '../assets/badge.png'
import Badge1 from '../assets/badge1.png'
import Badge2 from '../assets/badge2.png'
import Badge3 from '../assets/badge3.png'
// Import more images as needed
import './Badge.css';

function BadgePage() {
  // Array of badge images
  const badgeImages = [Badge1, Badge2, Badge3];
  const badgeEmptyImages = [Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge, Badge,Badge, Badge, Badge, Badge, Badge,];

  return (
    <div className="badgeContainer">
      <div className="badgeHeading"> 
      <h1>BADGES</h1>
      </div>
      <div className="badgeImageContainer">
      <div className="badgeGrid">
        {badgeImages.map((image, index) => (
          <img key={index} src={image} alt={`Badge ${index + 1}`} className="badgeImage" />
        ))}
        {badgeEmptyImages.map((image, index) => (
          <img key={index} src={image} alt={`Empty Badge ${index + 1}`} className="badgeImage" />
        ))}
      </div>
      </div>
      <div className="badgeBtnContainer">
      <button className="badgeButton">ADD NEW</button>
      </div>
    </div>
  );
}

export default BadgePage;
