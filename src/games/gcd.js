import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

const getGcd = (count1, count2) => {
  let divisor = 1;
  let answ = 1;
  while (divisor <= count1) {
    if (count1 % divisor === 0 && count2 % divisor === 0 && divisor >= answ) {
      answ = divisor;
    }
    divisor += 1;
  }
  return (String(answ));
};

const getQuestionAndAnswer = () => {
  const count1 = Math.abs(getRandomNumber(100));
  const count2 = Math.abs(getRandomNumber(100));

  const question = `${count1} ${count2}`;
  const answer = getGcd(count1, count2);

  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

const runGcdGame = () => startGame(getQuestionAndAnswer, description);

export default runGcdGame;
