import startGame from '../index.js';

const getQuestionAndAnswer = () => {
  const question = Math.abs((Math.random() * 100).toFixed(0));
  let answer = 0;
  let j = 0;
  let counter = 0;
  while (j < question) {
    if (question % (question - j) === 0) {
      counter += 1;
    }
    j += 1;
  }
  if (counter === 2) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [question, answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => startGame(getQuestionAndAnswer, description);

export default prime();
