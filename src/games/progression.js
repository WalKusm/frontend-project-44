import startGame from '../index.js';

const getQuestionAndAnswer = () => {
  const stepOfProgression = Math.abs((Math.random() * 10).toFixed(0));
  const startCount = Math.abs((Math.random() * 100).toFixed(0));
  const questArray = [];
  questArray[0] = startCount;
  let answ = 0;

  let j = 1;
  while (j < 10) {
    questArray[j] = questArray[j - 1] + stepOfProgression;
    j += 1;
  }

  const randNum = Math.abs((Math.random() * 10).toFixed(0));
  answ = questArray[randNum];
  questArray[randNum] = '..';

  const question = questArray.join(' ');
  const answer = String(answ);

  return [question, answer];
};

const description = 'What number is missing in the progression?';

const progression = () => startGame(getQuestionAndAnswer, description);

export default progression;
