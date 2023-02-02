import startGame from '../index.js';
import { getRandomTwodigitCount } from '../random-count.js';

const getQuestionAndAnswer = () => {
  const count1 = getRandomTwodigitCount();
  const count2 = getRandomTwodigitCount();
  const operatorArray = ['+', '-', '*'];
  const operator = operatorArray[Math.floor(Math.random() * 3)];
  const question = `${count1} ${operator} ${count2}`;
  let answ = 0;
  if (operator === '+') {
    answ = Number(count1) + Number(count2);
  }
  if (operator === '-') {
    answ = Number(count1) - Number(count2);
  }
  if (operator === '*') {
    answ = Number(count1) * Number(count2);
  }
  const answer = String(answ);
  return [question, answer];
};

const description = 'What is the result of the expression?';

const runCalcGame = () => startGame(getQuestionAndAnswer, description);

export default runCalcGame;
