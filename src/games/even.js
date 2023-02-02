import startGame from '../index.js';
import { getRandomTwodigitCount } from '../random-count.js';

const checkForEvenness = (question) => {
  let answ = 0;
  if (question % 2 === 0) {
    answ = 'yes';
  }
  if (question % 2 !== 0) {
    answ = 'no';
  }
  return answ;
};

const getQuestionAndAnswer = () => {
  const question = getRandomTwodigitCount();
  const answer = checkForEvenness(question);
  return [question, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => startGame(getQuestionAndAnswer, description);

export default runEvenGame;
