import startGame from '../index.js';
import { getRandomTwodigitCount, getRandomCount } from '../random-count.js';

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
  const stepOfProgression = Math.abs(getRandomCount());
  const startCount = Math.abs(getRandomTwodigitCount());
  let answ = 0;
  const progression = generateProgression(startCount, stepOfProgression);
  const randNum = Math.abs(getRandomCount() - 1);
  answ = progression[randNum];
  progression[randNum] = '..';

  const question = progression.join(' ');
  const answer = String(answ);

  return [question, answer];
};

const description = 'What number is missing in the progression?';

const runProgressionGame = () => startGame(getQuestionAndAnswer, description);

export default runProgressionGame;
