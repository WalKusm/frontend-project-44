import startGame from '../index.js';
import { getRandomTwodigitCount } from '../random-count.js';

const getQuestionAndAnswer = () => {
  const count1 = Math.abs(getRandomTwodigitCount());
  const count2 = Math.abs(getRandomTwodigitCount());
  const question = `${count1} ${count2}`;

  let divisor = 1;
  let answ = 1;
  while (divisor <= count1) {
    if (count1 % divisor === 0 && count2 % divisor === 0 && divisor >= answ) {
      answ = divisor;
    }
    divisor += 1;
  }
  const answer = String(answ);
  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

const runGcdGame = () => startGame(getQuestionAndAnswer, description);

export default runGcdGame;
