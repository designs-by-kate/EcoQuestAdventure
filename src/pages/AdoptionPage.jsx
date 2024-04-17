import React from 'react';

// Import animal images
import AnimalImage1 from '../assets/animal1.png';
import AnimalImage2 from '../assets/animal2.png';
import AnimalImage3 from '../assets/animal3.png';
import AnimalImage4 from '../assets/animal4.png';
import AnimalImage5 from '../assets/animal5.png';
import AnimalImage6 from '../assets/animal6.png';
import AnimalImage7 from '../assets/animal7.png';
import AnimalImage8 from '../assets/animal8.png';
// Import more images as needed
import './Adoption.css';

function AdoptionPage() {
  // Array of animal images
  const animalImages = [AnimalImage1, AnimalImage2, AnimalImage3, AnimalImage4, AnimalImage5, AnimalImage6, AnimalImage7, AnimalImage8];

  return (
    <div className="adoptionContainer">
      <div className="adoptionHeading">
      <h1>ADOPTION</h1>
      <h3> CHOOSE THE ANIMAL </h3>
      </div>
      <div className="adoptionImageContainer">
        <div className="adoptionGrid">
          {animalImages.map((image, index) => (
            <img key={index} src={image} alt={`Animal ${index + 1}`} className="adoptionImage" />
          ))}
        </div>
      </div>
      <div className="adoptionBtnContainer">
        <button className="adoptionButton">ADOPT</button>
      </div>
    </div>
  );
}

export default AdoptionPage;
