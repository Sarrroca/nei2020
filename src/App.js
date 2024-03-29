import './App.css';
import appImg from './assets/app-img.svg';
import tickImg from './assets/checked-tick.svg';
import crossImg from './assets/cross.svg';
import trophyImg from './assets/trophy.svg';
import earthImg from './assets/ATSIII_10NOV67_153107.jpg';
import satImg from './assets/sat.png';
import sarImg from './assets/sar_terreno_imagem.png';
import neiImg from './assets/NEI.png';
import duarteImg from './assets/team/duarte.galvao.jpg';
import helenaImg from './assets/team/helena.cruz.jpeg';
import ruiImg from './assets/team/rui.duarte.png';
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
    SELECT_MODE: 2,
    QUESTION: 3,
    ANSWER: 4,
    SCORE: 5,
  };
  
  const [questions] = useState(getRandomSubarray(Array.from(questionSet.keys()), numQuestions));

  const [currentScreen, setScreen] = useState(screen.BEGIN);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerSet, setAnswerSet] = useState(generateAnswerSet(questions[0], numAnswers));
  const [score, setScore] = useState(0);
  const [lastAnswer, setLastAnswer] = useState(false);

  const [isHardMode, setHardMode] = useState(false);

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
          <div className='nei-img'>
            <img src={neiImg} />
            <span>2020</span>
          </div>
          <div className='app'>
            <div className='question-section'>
              <div className='question-count'>
                <span>Bem-vindo ao quiz "V&ecirc; a Terra"!</span>
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
              <button className='start-btn' onClick={() => setScreen(screen.SELECT_MODE)}>Começar!</button>
            </div>
          </div>
          <img className='app-img' src={appImg} />
        </>
      );

    case screen.MORE_INFO:
      return (
        <>
          <div className='nei-img'>
            <img src={neiImg} />
            <span>2020</span>
          </div>
          <div className='app'>
            <div className='question-section'>
              <div className='question-count'>
                <span>Saber mais...</span>
              </div>
              <div className='question-text'>
                <p>
                As imagens obtidas de satélites são habitualmente ópticas, ou seja, semelhantes a uma fotografia tirada com máquina fotográfica ou telemóvel. 
                </p>
                <div className='question-img'>
                  <img src={earthImg} />
                  <p>Primeira fotografia a cores da Terra, tirada em 1967 pelo satélite geoestacionário ATS-3.</p>
                </div>
                <p>
                Para além destas imagens, existem satélites que geram imagens de outra forma. Estes satélites emitem ondas que, ao atingirem a superfície terrestre, são refletidas. Consoante o que atingem, água, vegetação, estradas ou telhados, estas ondas são refletidas de forma diferente. Com os ecos das ondas, é possível gerar imagens. Estas imagens são diferentes daquelas a que estamos habituados, não têm cor e têm texturas que dependem do que atingem.
                </p>
                <div className='question-img'><img src={sarImg} /></div>
                <p>
                A maior vantagem deste tipo de satélites é que consegue obter estas imagens a qualquer hora do dia, mesmo de noite, independentemente das condições meteorológicas, esteja a chover ou nevoeiro.
                </p>
                <p>
                A ESA tem um conjunto de satélites Sentinel que fornecem vários tipos de imagens de satélite através do programa <a href="https://www.esa.int/Applications/Observing_the_Earth/Copernicus">Copernicus</a>.
                </p>
              </div>
            </div>
            <div className='answer-section'>
              <button onClick={() => setScreen(screen.BEGIN)}>Voltar</button>
              <button className='start-btn' onClick={() => setScreen(screen.SELECT_MODE)}>Começar!</button>
            </div>
          </div>
        </>
      );

    case screen.SELECT_MODE:
      return (
        <>
          <div className='nei-img'>
            <img src={neiImg} />
            <span>2020</span>
          </div>
          <div className='app'>
            <div className='question-section'>
              <div className='question-count'>
                <span>Escolhe o modo:</span>
              </div>
            </div>
            <div className='answer-section'>
                <button style={{textAlign: 'center'}} className='start-btn' onClick={() => setScreen(screen.QUESTION)}>F&aacute;cil<br />(Imagens &Oacute;pticas)</button>
                <button style={{textAlign: 'center'}} onClick={() => {setHardMode(true);setScreen(screen.QUESTION)}}>Dif&iacute;cil<br />(Imagens Radar)</button>
            </div>
          </div>
        </>
      );

    case screen.QUESTION:
      return (
        <>
          <div className='nei-img'>
            <img src={neiImg} />
            <span>2020</span>
          </div>
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
                <button className='answer-choice' onClick={() => handleAnswerOptionClick(answerOption)} style={{backgroundImage: `url(${isHardMode ? questionSet[answerOption].sarImg : questionSet[answerOption].answerImg})`}} />
              ))}
            </div>
          </div>
        </>
      );

    case screen.ANSWER:
      return (
        <>
        <div className='nei-img'>
          <img src={neiImg} />
          <span>2020</span>
        </div>
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
                    <img className='correct' src={isHardMode ? questionSet[questions[currentQuestion]].sarImg : questionSet[questions[currentQuestion]].answerImg} />
                  </div>
                  <div className='question-img'>
                    <img className='tick' src={tickImg} />
                  </div>
                </>
              ) : (
                <>
                  <div className='question-img'>
                    <img src={isHardMode ? questionSet[questions[currentQuestion]].sarImg : questionSet[questions[currentQuestion]].answerImg} />
                  </div>
                  <div className='question-img'>
                    <img className='incorrect' src={isHardMode ? questionSet[lastAnswer].sarImg : questionSet[lastAnswer].answerImg} />
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
                  <img className='sar-img' src={isHardMode ? questionSet[questions[currentQuestion]].answerImg : questionSet[questions[currentQuestion]].sarImg} />
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
        </>
      );

    case screen.SCORE:
      return (
        <>
        <div className='nei-img'>
          <img src={neiImg} />
          <span>2020</span>
        </div>
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
            <div className='team-pics'>
              <div className='team-pic'>
                <div><img src={duarteImg} /></div>
                <div>Duarte Galvão</div>
              </div>
              <div className='team-pic'>
                <div><img src={helenaImg} /></div>
                <div>Helena Cruz</div>
              </div>
              <div className='team-pic'>
                <div><img src={ruiImg} /></div>
                <div>Rui Duarte</div>
              </div>
            </div>
          </div>
          <div className='answer-section'>
            <button onClick={() => window.location.reload(false)}>Jogar outra vez!</button>
          </div>
        </div>
        </>
      );

    default:
      // should not happen
      return;
  }
}

export default App;
