import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

const oneDigitNumber = 10;
const twoDigitNumber = 100;

const generateProgression = (startCount, stepOfProgression) => {
  const questArray = [];
  questArray[0] = startCount;
  let j = 1;
  while (j < 10) {
    questArray[j] = questArray[j - 1] + stepOfProgression;
    j += 1;
  }
  return questArray;
};

const getQuestionAndAnswer = () => {
  const stepOfProgression = Math.abs(getRandomNumber(oneDigitNumber));
  const startCount = Math.abs(getRandomNumber(twoDigitNumber));
  const progression = generateProgression(startCount, stepOfProgression);
  const randNum = getRandomNumber(oneDigitNumber) - 1;
  const answ = progression[randNum];
  progression[randNum] = '..';

  const question = progression.join(' ');
  const answer = String(answ);

  return [question, answer];
};

const description = 'What number is missing in the progression?';

const runProgressionGame = () => startGame(getQuestionAndAnswer, description);

export default runProgressionGame;
