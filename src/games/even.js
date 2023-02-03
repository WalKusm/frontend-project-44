import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

const isNumberEven = (question) => {
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
  const question = getRandomNumber(100);
  const answer = isNumberEven(question);
  return [question, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => startGame(getQuestionAndAnswer, description);

export default runEvenGame;
