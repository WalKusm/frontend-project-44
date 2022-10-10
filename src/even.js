import readlineSync from 'readline-sync';

const game1 = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const yes = 'yes';
  const no = 'no';
  let count = (Math.random() * 100).toFixed(0);
  let i = 0;
  while (i < 3) {
    console.log(`Question: ${count}`);
    const answ = readlineSync.question('Your answer: ');
    const yourAnswer = () => {
      if ((count % 2 === 0 && answ === yes && i < 2) || (count % 2 !== 0 && answ === no && i < 2)) {
        i += 1;
        count = (Math.random() * 100).toFixed(0);
        return ('Correct!');
      }
      if ((count % 2 === 0 && answ === yes && i === 2) || (count % 2 !== 0 && answ === no && i === 2)) {
        i += 1;
        count = (Math.random() * 100).toFixed(0);
        return (`Correct! \nCongratulations, ${userName}!`);
      }
      if (count % 2 === 0 && answ !== yes) {
        i = 0;
        count = (Math.random() * 100).toFixed(0);
        return (`'${answ} is wrong answer ;(. Correct answer was '${yes}'. Let's try again, ${userName}!`);
      }
      if (count % 2 !== 0 && answ !== no) {
        i = 0;
        count = (Math.random() * 100).toFixed(0);
        return (`'${answ}' is wrong answer ;(. Correct answer was '${no}'. Let's try again, ${userName}!`);
      }
    };
    console.log(yourAnswer());
  }
};
export default game1();
