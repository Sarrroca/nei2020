import './App.css';
import appImg from './assets/app-img.svg';
import tickImg from './assets/checked-tick.svg';
import crossImg from './assets/cross.svg';
import trophyImg from './assets/trophy.svg';
import earthImg from './assets/earth.png';
import satImg from './assets/sat.png';
import sarImg from './assets/sar_terreno_imagem.png';
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

  const screen= {
    BEGIN: 0,
    MORE_INFO: 1,
    QUESTION: 2,
    ANSWER: 3,
    SCORE: 4
  }
  
  const [questions] = useState(getRandomSubarray(Array.from(questionSet.keys()), numQuestions));

  const [currentScreen, setScreen] = useState(screen.BEGIN);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerSet, setAnswerSet] = useState(generateAnswerSet(questions[0], numAnswers));
  const [score, setScore] = useState(0);
  const [lastAnswer, setLastAnswer] = useState(false);

	const handleAnswerOptionClick = (answerOption) => {
    setLastAnswer(answerOption);
		if (answerOption === questions[currentQuestion]) {
      setScore(score + 1);
    }
    setScreen(screen.ANSWER);
  };
  
  const handleNextQuestionClick = () => {
    const nextQuestion = currentQuestion + 1;

		if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setAnswerSet(generateAnswerSet(questions[nextQuestion], numAnswers));
      setScreen(screen.QUESTION);
		} else {
			setScreen(screen.SCORE);
		}
  };

  switch (currentScreen) {
    case screen.BEGIN:
      return (
        <>
          <div className='app'>
            <div className='question-section'>
              <div className='question-count'>
                <span>Bem-vindo ao quiz V&ecirc; a Terra!</span>
              </div>
              <div className='question-text'>
                <p>
                Aqui vais poder testar os teus conhecimentos sobre a forma como os satélites veem a Terra. Os satélites são muito úteis porque nos permitem obter imagens da Terra, no entanto, eles não veem a Terra como nós. Há várias tecnologias de captura de imagem que fazem com que as imagens de satélite sejam diferentes das fotografias que conhecemos, mas são importantes para o estudo da superfície terrestre e conservação do nosso planeta. Achas que consegues adivinhar que imagem de satélite corresponde a que zona?
                </p>
                <p>
                Neste jogo vamos testar os teus conhecimentos sobre as imagens produzidas pelos satélites.
                </p>
              </div>
            </div>
            <div className='answer-section'>
              <button onClick={() => setScreen(screen.MORE_INFO)}>Saber mais...</button>
              <button className='start-btn' onClick={() => setScreen(screen.QUESTION)}>Começar!</button>
            </div>
          </div>
          <img className='app-img' src={appImg} />
        </>
      );

    case screen.MORE_INFO:
      return (
        <>
          <div className='app'>
            <div className='question-section'>
              <div className='question-count'>
                <span>Saber mais...</span>
              </div>
              <div className='question-text'>
                <p>
                As imagens obtidas de satélites são habitualmente ópticas, ou seja, semelhantes a uma fotografia tirada com máquina fotográfica ou telemóvel. 
                </p>
                <div className='question-img'><img src={earthImg} /></div>
                <p>
                Para além das imagens ópticas, existem outros satélites que geram imagens com base nos ecos dos sinais electromagnéticos refletidos pela superfície terrestre, de forma semelhante a um radar. É como se apontassem um foco luminoso e registrassem as reflexões observadas nos diferentes materiais.
                </p>
                <div className='question-img'><img src={sarImg} /></div>
                <p>
                Estas imagens são diferentes das ópticas uma vez que não têm côr, e apresentam uma textura que depende da zona observada. A grande vantagem destas imagens é funcionarem quer seja de dia ou de noite ou em dias nublados. A ESA tem um conjunto de satélites Sentinel que fornecem vários tipos de imagens de satélite através do programa <a href="https://www.esa.int/Applications/Observing_the_Earth/Copernicus">Copernicus</a> (gratuíto).
                </p>
              </div>
            </div>
            <div className='answer-section'>
              <button onClick={() => setScreen(screen.BEGIN)}>Voltar</button>
              <button className='start-btn' onClick={() => setScreen(screen.QUESTION)}>Começar!</button>
            </div>
          </div>
        </>
      );

    case screen.QUESTION:
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

    case screen.ANSWER:
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

    case screen.SCORE:
      return (
        <div className='app'>
          {score > questions.length/2 &&
            <div className='trophy-section'>
              <img src={trophyImg} />
            </div>
          }
          <div className='score-section'>
            {score > questions.length/2 &&
              <>Parab&eacute;ns!</>
            } Acertaste {score} em {questions.length}!
          </div>
          <div className='credits-section'>
            <p>Obrigado por teres participado e esperemos que tenhas gostado!</p>
            <p>Esta actividade foi criada no âmbito do projecto de investigação <a href="https://www.inesc-id.pt/projects/IE01018/">SARRROCA</a> (PTDC/EEI-HAC/31819/2017) em execução no <a href="https://www.inesc-id.pt/">INESC-ID</a>, financiado pela FCT, e foi desenvolvida por:</p>
            <ul>
              <li>Duarte Galvão</li>
              <li>Helena Cruz</li>
              <li>Rui Duarte</li>
            </ul>
          </div>
          <div className='answer-section'>
            <button onClick={() => window.location.reload(false)}>Jogar outra vez!</button>
          </div>
        </div>
      );

    default:
      // should not happen
      return;
  }
}

export default App;
