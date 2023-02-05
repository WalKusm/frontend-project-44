import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

const generateProgression = (startCount, stepOfProgression) => {
  const questArray = [];
  questArray[0] = startCount;
  let j = 1;
  while (j < 10) {
    questArray[j] = Number(questArray[j - 1]) + Number(stepOfProgression);
    j += 1;
  }
  return questArray;
};

const getQuestionAndAnswer = () => {
  const stepOfProgression = getRandomNumber(10);
  const startCount = getRandomNumber(100);
  const progression = generateProgression(startCount, stepOfProgression);
  const randNum = getRandomNumber(10) - 1;
  const answ = progression[randNum];
  progression[randNum] = '..';

  const question = progression.join(' ');
  const answer = String(answ);

  return [question, answer];
};

const description = 'What number is missing in the progression?';

const runProgressionGame = () => startGame(getQuestionAndAnswer, description);

export default runProgressionGame;
