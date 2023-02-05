import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

const operatorArray = ['+', '-', '*'];

const getCalculation = (count1, count2, operator) => {
  switch (operator) {
    case '+':
      return Number(count1) + Number(count2);
    case '-':
      return Number(count1) - Number(count2);
    case '*':
      return Number(count1) * Number(count2);
    default:
      throw Error;
  }
};

const getQuestionAndAnswer = () => {
  const count1 = getRandomNumber(100);
  const count2 = getRandomNumber(100);
  const operator = operatorArray[Math.floor(Math.random() * operatorArray.length)];
  const question = `${count1} ${operator} ${count2}`;
  const answer = String(getCalculation(count1, count2, operator));
  return [question, answer];
};

const description = 'What is the result of the expression?';

const runCalcGame = () => startGame(getQuestionAndAnswer, description);

export default runCalcGame;
