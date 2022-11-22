import readlineSync from 'readline-sync';

const game2 = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  let result = 0;
  const array = ['+', '-', '*'];
  let i = 0;
  while (i < 3) {
    const count1 = (Math.random() * 100).toFixed(0);
    const count2 = (Math.random() * 100).toFixed(0);
    const operation = array[Math.floor(Math.random() * 3)];

    if (operation === '+') {
      result = Number(count1) + Number(count2);
    }
    if (operation === '-') {
      result = Number(count1) - Number(count2);
    }
    if (operation === '*') {
      result = Number(count1) * Number(count2);
    }

    console.log(`Question: ${count1} ${operation} ${count2}`);
    const answ = readlineSync.question('Your answer: ');

    if (Number(answ) === result && i === 2) {
      console.log(`Correct!\nCongratulations, ${userName}!`);
      i += 1;
    }
    if (Number(answ) === result && i < 2) {
      console.log('Correct!');
      i += 1;
    }
    if (Number(answ) !== result) {
      i = 3;
      console.log(`'${answ}' is wrong answer ;(. Correct answer was '${result}'.\n Let's try again, ${userName}!`);
    }
  }
};
export default game2();
