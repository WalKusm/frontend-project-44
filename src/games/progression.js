import startGame from '../index.js';
import { getRandomTwodigitCount, getRandomCount } from '../random-count.js';

const getQuestionAndAnswer = () => {
  const stepOfProgression = Math.abs(getRandomCount());
  const startCount = Math.abs(getRandomTwodigitCount());
  const questArray = [];
  questArray[0] = startCount;
  let answ = 0;

  let j = 1;
  while (j < 10) {
    questArray[j] = questArray[j - 1] + stepOfProgression;
    j += 1;
  }

  const randNum = Math.abs(getRandomCount() - 1);
  answ = questArray[randNum];
  questArray[randNum] = '..';

  const question = questArray.join(' ');
  const answer = String(answ);

  return [question, answer];
};

const description = 'What number is missing in the progression?';

const runProgressionGame = () => startGame(getQuestionAndAnswer, description);

export default runProgressionGame;
