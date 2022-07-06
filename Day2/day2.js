'use strict';
const fs = require('fs');
const num = fs.readFileSync('./input_02.txt', 'utf-8');
const strings = num.slice(/\d+-\d+\s[a-z]:\s\w+/g);
const str = strings.split('\n');

for (let b = 0; b <= str.length - 1; b++) {
  const elements = str[b].split(' ');

  const numbers = elements[0].split('-').map(Number);
  const letter = elements[1].slice(0, 1);
  const pass = elements[2];

  let sum = 0;
  for (let i = 0; i <= pass.length - 1; i++) {
    if (pass[i] === letter) {
      sum++;
    }
  }
  if (sum >= numbers[0] && sum <= numbers[1]) {
    console.log('Access code accepted!');
  } else console.log('Access denied!');
}
