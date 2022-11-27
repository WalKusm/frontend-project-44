import readlineSync from 'readline-sync';

const game3 = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < 3) {
    const count1 = Math.abs((Math.random() * 100).toFixed(0));
    const count2 = Math.abs((Math.random() * 100).toFixed(0));
    console.log(`Question: ${count1} ${count2}`);
    const answ = readlineSync.question('Your answer: ');
    let j = 1;
    let result = 0;

    while (j <= count1) {
      if (count1 % j === 0 && count2 % j === 0 && j >= result) {
        result = j;
      }
      j += 1;
    }

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
export default game3();
