import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

const twoDigitNumber = 100;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(twoDigitNumber);
  const answer = (quest) => (quest % 2 === 0 ? 'yes' : 'no');

  return [question, answer(question)];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => startGame(getQuestionAndAnswer, description);

export default runEvenGame;
