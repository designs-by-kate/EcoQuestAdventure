import React from 'react';
import MainImage from '../assets/animal1.png';
import HomeIcon from '../assets/homeIcon.png';
import HappyIcon from '../assets/happyIcon.png';
import MedIcon from '../assets/medIcon.png';
import FoodIcon from '../assets/foodIcon.png';
import HealthIcon from '../assets/healthIcon.png';
import PlayIcon from '../assets/playIcon.png';
import GroomingIcon from '../assets/groomIcon.png';
import BathIcon from '../assets/bathIcon.png';
import './PetCare.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PetCarePage() {
  const petCareItems = [
    { icon: HomeIcon, alt: 'Health Icon', progress: 10, color: '#4F8D74' },
    { icon: FoodIcon, alt: 'Grooming Icon', progress: 50, color: '#203A3A' },
    { icon: HappyIcon, alt: 'Food Icon', progress: 20, color: '#36502D' },
    { icon: GroomingIcon, alt: 'Bath Icon', progress: 50, color: '#767C26' },
    { icon: BathIcon, alt: 'Happy Icon', progress: 90, color: '#7F5525' },
    { icon: PlayIcon, alt: 'Home Icon', progress: 60, color: '#3C270F' },
    { icon: HealthIcon, alt: 'Med Icon', progress: 70, color: '#C12424' },
    { icon: MedIcon, alt: 'Play Icon', progress: 20, color: '#DEB01B' },
    
  ];

  return (
    <div className="petCareContainer">
      <div className="petCareHeader">
        <img src={MainImage} alt="Main Image" className="petCareMainImage" />
        <div>
          <h1>Pet Care</h1>
          <h3>Name: </h3>
          <h2>Nacho</h2>
        </div>
      </div>
      <div className="petCareContent">
        {petCareItems.map((item, index) => (
          <div key={index} className="petCareItem">
            <img src={item.icon} alt={item.alt} className="petCareIcon" />
            <div className="progress">
              <div className="progress-bar petCareProgressBar" role="progressbar" style={{ width: `${item.progress}%`, backgroundColor: item.color  }} aria-valuenow={item.progress} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetCarePage;
