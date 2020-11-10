import './App.css';
import appImg from './assets/app-img.png';
import React, { useState } from 'react';

import q01q  from './assets/questions/01/q.png';
import q01a1 from './assets/questions/01/a1.png';
import q01a2 from './assets/questions/01/a2.png';
import q01a3 from './assets/questions/01/a3.png';
import q01a4 from './assets/questions/01/a4.png';
import q02q  from './assets/questions/02/q.png';
import q02a1 from './assets/questions/02/a1.png';
import q02a2 from './assets/questions/02/a2.png';
import q02a3 from './assets/questions/02/a3.png';
import q02a4 from './assets/questions/02/a4.png';

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
      questionText: 'Identifica qual a imagem correspondente a um meio urbano.',
      questionImg: q01q,
			answerOptions: [
				{ img: q01a1, isCorrect: false },
				{ img: q01a2, isCorrect: true },
				{ img: q01a3, isCorrect: false },
				{ img: q01a4, isCorrect: false },
			],
		},
		{
      questionText: 'Identifica qual a imagem correspondente a um meio rural.',
      questionImg: q02q,
			answerOptions: [
				{ img: q02a1, isCorrect: false },
				{ img: q02a2, isCorrect: false },
				{ img: q02a3, isCorrect: false },
				{ img: q02a4, isCorrect: true },
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
    if (showLastAnswer) {
      return (
        <div className='app'>
          <div className='question-section'>
            <div className='question-count'>
              <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-img'>
              <img src={questions[currentQuestion].questionImg} />
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            <button onClick={() => handleNextQuestionClick()}>Pr&oacute;xima pergunta!</button>
          </div>
        </div>
      );
    }
    else {
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
                <div className='question-img'>
                  <img src={questions[currentQuestion].questionImg} />
                </div>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
              </div>
              <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                  <button className='answer-choice' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} style={{backgroundImage: `url(${answerOption.img})`}} />
                ))}
              </div>
            </>
          )}
        </div>
      );
    }
  }
  else {
    return (
      <>
        <div className='app'>
          <div className='question-section'>
            <div className='question-count'>
              <span>Bem-vindo ao quiz V&ecirc; a Terra!</span>
            </div>
            <div className='question-text'>
              Aqui vais poder testar os teus conhecimentos sobre a forma como os satélites veem a Terra. Os satélites são muito úteis porque nos permitem obter imagens da Terra, no entanto, eles não veem a Terra como nós. Há várias tecnologias de captura de imagem que fazem com que as imagens de satélite sejam diferentes das fotografias que conhecemos. Achas que consegues adivinhar que imagem de satélite corresponde a que zona?
            </div>
          </div>
          <div className='answer-section'>
            <button onClick={() => setStarted(true)}>Começar!</button>
          </div>
        </div>
        <img className='app-img' src={appImg} />
      </>
    );
  }
}

export default App;
