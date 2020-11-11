import './App.css';
import appImg from './assets/app-img.svg';
import tickImg from './assets/checked-tick.svg';
import crossImg from './assets/cross.svg';
import questionSet from './questions';
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

function generateAnswerSet(question, size) {
  var ans = getRandomSubarray(Array.from(questionSet.keys()), size);
  while (!ans.includes(question)) {
    ans = getRandomSubarray(Array.from(questionSet.keys()), size);
  }
  return ans;
}

function App() {
  const numQuestions = 6;
  const numAnswers = 4;
  
  const [questions] = useState(getRandomSubarray(Array.from(questionSet.keys()), numQuestions));

  const [isStarted, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerSet, setAnswerSet] = useState(generateAnswerSet(questions[0], numAnswers));
	const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [lastAnswer, setLastAnswer] = useState(false);
  const [showLastAnswer, setShowLastAnswer] = useState(false);

	const handleAnswerOptionClick = (answerOption) => {
    setShowLastAnswer(true);
    setLastAnswer(answerOption);
		if (answerOption === questions[currentQuestion]) {
      setScore(score + 1);
    }
  };
  
  const handleNextQuestionClick = () => {
    setShowLastAnswer(false);

    const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setAnswerSet(generateAnswerSet(questions[nextQuestion], numAnswers));
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
            <div className='question-text'>{questionSet[questions[currentQuestion]].questionText}</div>
            <div className='show-answer'>
              <div className='show-answer-imgs'>
              {lastAnswer === questions[currentQuestion] ? (
                <>
                  <div className='question-img'>
                    <img className='correct' src={questionSet[questions[currentQuestion]].answerImg} />
                  </div>
                  <div className='question-img'>
                    <img className='tick' src={tickImg} />
                  </div>
                </>
              ) : (
                <>
                  <div className='question-img'>
                    <img src={questionSet[questions[currentQuestion]].answerImg} />
                  </div>
                  <div className='question-img'>
                    <img className='incorrect' src={questionSet[lastAnswer].answerImg} />
                  </div>
                  <div className='question-img'>
                    <img className='cross' src={crossImg} />
                  </div>
                </>
              )}
              </div>
              <div className='show-answer-explain'>
                <div className='show-answer-text'>
                  {questionSet[questions[currentQuestion]].answerText}
                </div>
                <div className='question-img'>
                  <img className='sar-img' src={questionSet[questions[currentQuestion]].sarImg} />
                </div>
              </div>
            </div>
          </div>
          <div className='answer-section'>
            <button onClick={() => handleNextQuestionClick()}>
              {currentQuestion + 1 < questions.length ? (
                <>Pr&oacute;xima pergunta!</>
              ) : (
                <>Ver pontua&ccedil;&atilde;o!</>
              )}
            </button>
          </div>
        </div>
      );
    }
    else {
      if (showScore) {
        return (
          <>
            <div className='app'>
              <div className='score-section'>
                {score > questions.length/2 &&
                  <>Parab&eacute;ns!</>
                } Acertaste {score} em {questions.length}!
              </div>
              <div className='answer-section'>
                <button onClick={() => window.location.reload(false)}>Jogar outra vez!</button>
              </div>
            </div>
            <img className='app-img' src={appImg} />
          </>
        );
      }
      else {
        return (
          <div className='app'>
            <div className='question-section'>
              <div className='question-count'>
                <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-img'>
                <img src={questionSet[questions[currentQuestion]].questionImg} />
              </div>
              <div className='question-text'>{questionSet[questions[currentQuestion]].questionText}</div>
            </div>
            <div className='answer-section'>
              {answerSet.map((answerOption) => (
                <button className='answer-choice' onClick={() => handleAnswerOptionClick(answerOption)} style={{backgroundImage: `url(${questionSet[answerOption].answerImg})`}} />
              ))}
            </div>
          </div>
        );
      }
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
              <p>
              As imagens da Terra vistas do espaço são obtidas por satélites. Os satélites usam várias tecnologias para obter imagens da superfície da Terra, algumas das quais pouco parecidas com as fotografias que conhecemos, mas são importantes para estudar a superfície terrestre...
              </p>
              <p>
              Neste jogo vamos testar os teus conhecimentos sobre as imagens produzidas pelos satélites.
              </p>
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
