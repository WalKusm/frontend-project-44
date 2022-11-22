import readlineSync from 'readline-sync';
import {greeting, rules, cycle, checking, result} from './index.js';

greeting();

rules('What is the result of the expression?');

const operation = () => {
  const array = ['+', '-', '*'];
  const count1 = (Math.random() * 100).toFixed(0);
  const count2 = (Math.random() * 100).toFixed(0);
  const operat = array[Math.floor(Math.random() * 3)];
  return (`${count1} ${operat} ${count2}`);
};

const uslovie = (operation()) => {
  let res = 0;
  if (operat === '+') {
    res = Number(count1) + Number(count2);
  }
  if (operat === '-') {
    res = Number(count1) - Number(count2);
  }
  if (operat === '*') {
    res = Number(count1) * Number(count2);
  }
  return res;
}

cycle(`Question: ${operation()}`, uslovie)
