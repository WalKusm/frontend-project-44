import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

const isNumberEven = (question) => (question % 2 === 0 ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(100);
  const answer = isNumberEven(question);
  return [question, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => startGame(getQuestionAndAnswer, description);

export default runEvenGame;
