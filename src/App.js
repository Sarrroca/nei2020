import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function getRandomSubarray(arr, size) {
  var shuffled = arr.slice(0)
  for(let i = shuffled.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = temp
  }
  return shuffled.slice(0, size);
}

function App() {
  const numQuestions = 2;

	const questionSet = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
  ];
  
  const [questions, _] = useState(getRandomSubarray(questionSet, numQuestions));

  const [isStarted, setStarted] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [lastWasCorrect, setLastCorrect] = useState(false);
  const [showLastAnswer, setShowLastAnswer] = useState(false);

	const handleAnswerOptionClick = (isCorrect) => {
    setShowLastAnswer(true);
		if (isCorrect) {
      setScore(score + 1);
      setLastCorrect(true);
    }
    else {
      setLastCorrect(false);
    }
  };
  
  const handleNextQuestionClick = () => {
    setShowLastAnswer(false);

    const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
  };

  if (isStarted) {
    return (
      <div className='app'>
        {showScore ? (
          <div className='score-section'>
            {score > questions.length/2 &&
              <>Parab&eacute;ns!</>
            } Acertaste {score} em {questions.length}!
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {showLastAnswer ? (
                <button onClick={() => handleNextQuestionClick()}>Pr&oacute;xima pergunta!</button>
              ) : (
                questions[currentQuestion].answerOptions.map((answerOption) => (
                  <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))
              )}
            </div>
          </>
        )}
      </div>
    );
  }
  else {
    return (
      <div className='app'>
        Bem vindo!
        <button onClick={() => setStarted(true)}>Começar!</button>
      </div>
    );
  }
}

export default App;
