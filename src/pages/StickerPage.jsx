import React from 'react';
import AnimalImage1 from '../assets/animal1.png';
import AnimalImage2 from '../assets/animal2.png';
import AnimalImage3 from '../assets/animal3.png';
import AnimalImage4 from '../assets/animal4.png';
import AnimalImage5 from '../assets/animal5.png';
import AnimalImage6 from '../assets/animal6.png';
import AnimalImage7 from '../assets/animal7.png';
import AnimalImage8 from '../assets/animal8.png';
// Import insect images
import InsectImage1 from '../assets/insect1.png';
import InsectImage2 from '../assets/insect2.png';
import InsectImage3 from '../assets/insect3.png';
import InsectImage4 from '../assets/insect4.png';
// Import plant images
import PlantImage1 from '../assets/plant1.png';
import PlantImage2 from '../assets/plant2.png';
import PlantImage3 from '../assets/plant3.png';
import PlantImage4 from '../assets/plant4.png';
// Import fruit images
import FruitImage1 from '../assets/fruit1.png';
import FruitImage2 from '../assets/fruit2.png';
import FruitImage3 from '../assets/fruit3.png';
import FruitImage4 from '../assets/fruit4.png';
// Import more images as needed
import './Sticker.css';

function StickerPage() {
  // Array of sticker images
  const animalImages = [AnimalImage1, AnimalImage2, AnimalImage3, AnimalImage4, AnimalImage5, AnimalImage6, AnimalImage7, AnimalImage8];
  const insectImages = [InsectImage1, InsectImage2, InsectImage3, InsectImage4];
  const plantImages = [PlantImage1, PlantImage2, PlantImage3, PlantImage4];
  const fruitImages = [FruitImage1, FruitImage2, FruitImage3, FruitImage4];

  return (
    <div className="stickerContainer">
      <h1>STICKERS</h1>
      <div className="stickerGrid">
        {animalImages.map((image, index) => (
          <img key={index} src={image} alt={`Animal ${index + 1}`} className="stickerImage siAnimal" />
        ))}
        {insectImages.map((image, index) => (
          <img key={index} src={image} alt={`Insect ${index + 1}`} className="stickerImage siInsect" />
        ))}
        {plantImages.map((image, index) => (
          <img key={index} src={image} alt={`Plant ${index + 1}`} className="stickerImage siPlant" />
        ))}
        {fruitImages.map((image, index) => (
          <img key={index} src={image} alt={`Fruit ${index + 1}`} className="stickerImage siFruit" />
        ))}
      </div>
      <button className="stickerButton">ADD NEW</button>
    </div>
  );
}

export default StickerPage;
