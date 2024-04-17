import React from 'react';
import MainImage from '../assets/ecogirl.png'; 
import SubImage from '../assets/animal2.png'; 
import './Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfilePage() {
  return (
    <div className="profileContainer">
    <div className="profileHeader">
      <h1>PROFILE</h1>
      <img src={MainImage} alt="Main Image" className="profile-main-image" />
      <h2>Eco Guardian</h2>
      <h2>Level 2</h2>
    </div>
    <div className="profileContent">
      <div className="profileTitle">
        <h3>Ready for adoption</h3>
      </div>
      <div className="progress">
        <div className="progress-bar profileProgressBar" role="progressbar" style={{ width: '90%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="profileImage">
        <h2 className="profilePetTitle">PET</h2>
        <img src={SubImage} alt="Sub Image" className="profile-sub-image" />
      </div>
    </div>
  </div>
  )
}

export default ProfilePage