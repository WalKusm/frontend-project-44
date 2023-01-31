import readlineSync from 'readline-sync';

const prime = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  let i = 0;
  while (i < 3) {
    const count1 = Math.abs((Math.random() * 100).toFixed(0));
    let result = 0;

    let j = 0;
    let n = 0;
    while (j < count1) {
      if (count1 % (count1 - j) === 0) {
        n += 1;
      }
      j += 1;
    }

    if (n === 2) {
      result = 'yes';
    } else {
      result = 'no';
    }

    console.log(`Question: ${count1}`);
    const answ = readlineSync.question('Your answer: ');

    if (answ === result && i === 2) {
      console.log(`Correct!\nCongratulations, ${userName}!`);
      i += 1;
    }
    if (answ === result && i < 2) {
      console.log('Correct!');
      i += 1;
    }
    if (answ !== result) {
      i = 3;
      console.log(`'${answ}' is wrong answer ;(. Correct answer was '${result}'.\n Let's try again, ${userName}!`);
    }
  }
};
export default prime();
