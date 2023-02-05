import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

const twoDigitNumber = 100;

const isNumberPrime = (question) => {
  let j = 0;
  let counter = 0;
  while (j < question) {
    if (question % (question - j) === 0) {
      counter += 1;
    }
    j += 1;
  }
  if (counter === 2) {
    return true;
  }
  return false;
};

const getQuestionAndAnswer = () => {
  const question = Number(getRandomNumber(twoDigitNumber));
  const answer = (quest) => (isNumberPrime(quest) ? 'yes' : 'no');
  return [question, answer(question)];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runPrimeGame = () => startGame(getQuestionAndAnswer, description);

export default runPrimeGame;
