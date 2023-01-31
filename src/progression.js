import readlineSync from 'readline-sync';

const game4 = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i < 3) {
    const stepOfProgression = Math.abs((Math.random() * 10).toFixed(0));
    const startCount = Math.abs((Math.random() * 100).toFixed(0));
    const array = [];
    array[0] = startCount;
    let result = 0;
    let j = 1;

    while (j < 10) {
      array[j] = array[j - 1] + stepOfProgression;
      j += 1;
    }

    const randNum = Math.abs((Math.random() * 10).toFixed(0));
    result = array[randNum];
    array[randNum] = '..';
    console.log(`Question: ${array.join(' ')}`);
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
export default game4();
