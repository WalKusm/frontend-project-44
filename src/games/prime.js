import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

const twoDigitNumber = 100;

const isNumberPrime = (question) => {
  let answ = 0;
  let j = 0;
  let counter = 0;
  while (j < question) {
    if (question % (question - j) === 0) {
      counter += 1;
    }
    j += 1;
  }
  if (counter === 2) {
    answ = 'yes';
  } else {
    answ = 'no';
  }
  return answ;
};

const getQuestionAndAnswer = () => {
  const question = Math.abs(getRandomNumber(twoDigitNumber));
  const answer = isNumberPrime(question);
  return [question, answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runPrimeGame = () => startGame(getQuestionAndAnswer, description);

export default runPrimeGame;
