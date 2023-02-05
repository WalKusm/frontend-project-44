import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

const twoDigitNumber = 100;

const isNumberEven = (question) => (question % 2 === 0 ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(twoDigitNumber);
  const answer = isNumberEven(question);
  return [question, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => startGame(getQuestionAndAnswer, description);

export default runEvenGame;
