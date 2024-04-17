import React from 'react';
import MainImage from '../assets/animal5.png'; // Import main image
import Image1 from '../assets/animal1.png'; // Import additional images
import Image2 from '../assets/animal2.png';
import './Edu.css';

function EduPage() {
  return (
    <div className="eduContainer">
      <h1>Learn About Fox</h1>
      <div className="eduMainImageContainer">
        <img src={MainImage} alt="Main Image" className="eduMainImage" />
        <div className="eduSideImagesContainer">
          <img src={Image1} alt="Image 1" className="eduSideImage" />
          <img src={Image2} alt="Image 2" className="eduSideImage" />
        </div>
      </div>
      <div className="eduTextContent">
        <p>Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. <br></br><br></br>They have a flattened skull, upright, triangular ears, a pointed, slightly upturned snout, and a long bushy tail ("brush").</p>
      </div>
      <button className="eduBtn">Take Quiz</button>
    </div>
  );
}

export default EduPage;
