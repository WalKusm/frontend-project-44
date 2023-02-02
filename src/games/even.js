import startGame from '../index.js';

const getQuestionAndAnswer = () => {
  const question = (Math.random() * 100).toFixed(0);
  let answer = 0;
  if (question % 2 === 0) {
    answer = 'yes';
  }
  if (question % 2 !== 0) {
    answer = 'no';
  }
  return [question, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => startGame(getQuestionAndAnswer, description);

export default runEvenGame;
