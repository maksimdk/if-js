import { sum } from './sum.js';
import { click1, click2, click3 } from './color.js';

console.log(sum(5)(2));

//========================================

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
export const colors = [
  'magenta',
  'cyan',
  'firebrick',
  'springgreen',
  'skyblue',
];

text1.addEventListener('click', click1);

text2.addEventListener('click', click2);

text3.addEventListener('click', click3);
