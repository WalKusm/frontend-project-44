import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

const operatorArray = ['+', '-', '*'];
const twoDigitNumber = 100;

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
  const count1 = getRandomNumber(twoDigitNumber);
  const count2 = getRandomNumber(twoDigitNumber);
  const operator = operatorArray[getRandomNumber(operatorArray.length - 1)];
  const question = `${count1} ${operator} ${count2}`;
  const answer = String(getCalculation(count1, count2, operator));
  return [question, answer];
};

const description = 'What is the result of the expression?';

const runCalcGame = () => startGame(getQuestionAndAnswer, description);

export default runCalcGame;
