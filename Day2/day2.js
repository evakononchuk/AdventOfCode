'use strict';
const fs = require('fs');
const num = fs.readFileSync(
  '/Users/Elena/AdventOfCode/Day2/input_02.txt',
  'utf-8'
);
const strings = num.slice(/\d+-\d+\s[a-z]:\s\w+/g);
const str = strings.split('\n');

const wrapper = (str) => {
  let qty = 0;
  for (let b = 0; b <= str.length - 1; b++) {
    const elements = str[b].split(' ');
    const numbers = elements[0].split('-').map(Number);
    const letter = elements[1].slice(0, 1);
    const pass = elements[2];

    let checkLetterQty = 0;
    for (let i = 0; i <= pass.length - 1; i++) {
      if (pass[i] === letter) {
        checkLetterQty++;
      }
    }
    if (checkLetterQty >= numbers[0] && checkLetterQty <= numbers[1]) {
      qty++;
    }
  }
  console.log(qty);
};
wrapper(str);
module.exports = { wrapper };
