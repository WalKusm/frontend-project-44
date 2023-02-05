import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

const twoDigitNumber = 100;

const getGcd = (count1, count2) => {
  let divisor = 1;
  let answ = 1;
  while (divisor <= count1) {
    if (count1 % divisor === 0 && count2 % divisor === 0 && divisor >= answ) {
      answ = divisor;
    }
    divisor += 1;
  }
  return answ;
};

const getQuestionAndAnswer = () => {
  const count1 = getRandomNumber(twoDigitNumber);
  const count2 = getRandomNumber(twoDigitNumber);

  const question = `${count1} ${count2}`;
  const answer = String(getGcd(count1, count2));

  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

const runGcdGame = () => startGame(getQuestionAndAnswer, description);

export default runGcdGame;
