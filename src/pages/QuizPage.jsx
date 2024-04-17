import React from 'react';
import QuizImage from '../assets/quiz.png';
import './Quiz.css';

function QuizPage() {
  return (
    <div className="quizContainer">
      <h1>Quiz</h1>
      <img src={QuizImage} alt="Quiz" className="quizImage" />
      <button className="quizButton">PLAY</button>
    </div>
  );
}

export default QuizPage;