import q1q from './assets/questions/1/q.jpg';
import q1a from './assets/questions/1/a.jpg';
import q1s from './assets/questions/1/s.jpg';
import q2q from './assets/questions/2/q.jpg';
import q2a from './assets/questions/2/a.jpg';
import q2s from './assets/questions/2/s.jpg';
import q3q from './assets/questions/3/q.jpg';
import q3a from './assets/questions/3/a.jpg';
import q3s from './assets/questions/3/s.jpg';
import q4q from './assets/questions/4/q.jpg';
import q4a from './assets/questions/4/a.jpg';
import q4s from './assets/questions/4/s.jpg';
import q5q from './assets/questions/5/q.jpg';
import q5a from './assets/questions/5/a.jpg';
import q5s from './assets/questions/5/s.jpg';
import q6q from './assets/questions/6/q.jpg';
import q6a from './assets/questions/6/a.jpg';
import q6s from './assets/questions/6/s.jpg';
import q7q from './assets/questions/7/q.jpg';
import q7a from './assets/questions/7/a.jpg';
import q7s from './assets/questions/7/s.jpg';
import q8q from './assets/questions/8/q.jpg';
import q8a from './assets/questions/8/a.jpg';
import q8s from './assets/questions/8/s.jpg';
import q9q from './assets/questions/9/q.jpg';
import q9a from './assets/questions/9/a.jpg';
import q9s from './assets/questions/9/s.jpg';

const questionSet = [
  {
    questionText: 'Qual a imagem correspondente a um meio urbano?',
    answerText: 'A grande densidade de construção faz com que os telhados dos edifícios causem múltiplas reflexões do sinal de radar do satélite provocando o espalhamento do sinal. Ainda assim é possível identificar as ruas da cidade.',
    questionImg: q1q,
    answerImg: q1a,
    sarImg: q1s,
  },
  {
    questionText: 'Qual a imagem correspondente a um meio rural?',
    answerText: 'Várias parcelas com diferentes cultivos mostram zonas com diferentes tons de cinzento. As zonas de cultivos estão próximas de fontes de água, tais como rios para irrigação dos campos de cultivo. É possível corresponder o tom de cada parcela de cultivo a uma determinada plantação. Esta observação permite avaliar a ocupação dos solos remotamente e até o desenvolvimento de algumas culturas (maturação e ataque de pragas).',
    questionImg: q2q,
    answerImg: q2a,
    sarImg: q2s,
  },
  {
    questionText: 'Qual a imagem correspondente a uma praia?',
    answerText: 'Distinção entre a àgua (escuro) e costa (branco). A água reflecte o sinal com a forma das ondas. É possível ver também os pontões a separar as várias praias.',
    questionImg: q3q,
    answerImg: q3a,
    sarImg: q3s,
  },
  {
    questionText: 'Qual a imagem correspondente a um deserto?',
    answerText: 'Algumas sombras com bastante “granulado”. Os grãos de areia reflectem o sinal do satélite em todas as direções, e como a sua superfície é bastante regular não vê segmentação de regiões diferentes. É possível monitorar o avanço das dunas sobre solos de cultivos através do padrão reflectido pelo solo.',
    questionImg: q4q,
    answerImg: q4a,
    sarImg: q4s,
  },
  {
    questionText: 'Qual a imagem correspondente a uma floresta?',
    answerText: 'Zonas com árvores altas tendem a aparecer como escuro, os riscos pretos como caminhos, e zonas a branco como terreno com vegetação rasteira. A destruição da floresta por incêndios e o abate de árvores torna visível as reflexões do solo com zonas mais claras.',
    questionImg: q5q,
    answerImg: q5a,
    sarImg: q5s,
  },
  {
    questionText: 'Qual a imagem correspondente a uma montanha?',
    answerText: 'Notam-se os sulcos das montanhas. Quando as montanhas não possuem vegetação capaz de absorver o sinal do satélite, o sinal é qusae totalmente reflectido pela superfície rochosa. Com esta observação é possível identificar alterações geológicas naturais ou causadas por atividade humana tais como extração de minério.',
    questionImg: q6q,
    answerImg: q6a,
    sarImg: q6s,
  },
  {
    questionText: 'Qual a imagem correspondente a um oceano?',
    answerText: 'Observa as reflexões das ondas e algumas embarcações (pontos brilhantes). Esta tecnologia é muito utilizada para monitorização de atividades de pesca ilegal, derrames de petróleo e auxilio em operações de resgate de embarcações. Esta tecnologia também consegue detectar ilhas de lixo a flutuar nos oceanos.',
    questionImg: q7q,
    answerImg: q7a,
    sarImg: q7s,
  },
  {
    questionText: 'Qual a imagem correspondente a gelo?',
    answerText: 'O gelo é altamente refletivo e denso, o que faz refletir o sinal com alta intensidade e uniformemente. Com esta tecnologia é possível determinar com elevada precisão o recuo dos glaciares devido ao aquecimento global.',
    questionImg: q8q,
    answerImg: q8a,
    sarImg: q8s,
  },
  {
    questionText: 'Qual a imagem correspondente a uma ilha?',
    answerText: 'A ilha apresenta algum relevo e está rodeada de água (escuro).',
    questionImg: q9q,
    answerImg: q9a,
    sarImg: q9s,
  },
];

export default questionSet;