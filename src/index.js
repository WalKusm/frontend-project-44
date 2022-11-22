/*import readlineSync from 'readline-sync';

export const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const rules = (rule) => {
  console.log(rule);
};

export const cycle = (question, condition) => {
  let i = 0;
  while (i < 3) {
    console.log(question);
    const answ = readlineSync.question('Your answer: ');
    if (condition === true && i < 2) {
      i += 1;
      console.log('Correct!');
    }
    if (condition === true && i === 2) {
      i += 1;
      console.log(`Correct!\nCongratulations, ${userName}!`);
    }
    if (condition !== true) {
      i = 4;
      console.log(`'${answ}' is wrong answer ;(. Correct answer was '${rightAnsw}'. Let's try again, ${userName}!`);
    }
  }
};*/
