import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

const twoDigitNumber = 100;

const isNumberEven = (quest) => {
  if (quest % 2 === 0) {
    return true;
  }
  return false;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(twoDigitNumber);
  const answ = (quest) => (isNumberEven(quest) ? 'yes' : 'no');
  const answer = answ(question);

  return [question, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => startGame(getQuestionAndAnswer, description);

export default runEvenGame;
