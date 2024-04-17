import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import AdoptionPage from './pages/AdoptionPage';
import BadgePage from './pages/BadgePage';
import EduPage from './pages/EduPage';
import MapPage from './pages/MapPage';
import PetCarePage from './pages/PetCarePage';
import QuizPage from './pages/QuizPage';
import StickerPage from './pages/StickerPage';
import Header from './component/Header';
import NavBar from './component/NavBar';

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/adoption" element={<AdoptionPage />} />
          <Route path="/badge" element={<BadgePage />} />
          <Route path="/edu" element={<EduPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/pet-care" element={<PetCarePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/sticker" element={<StickerPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
