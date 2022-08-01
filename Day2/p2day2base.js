'use strict';
const fs = require('fs');
const num = fs.readFileSync('/Users/Elena/AdventOfCode/sample2.txt', 'utf-8');
//const num = '3-4 l: blllk\n1-5 j: jjjjgj\n1-3 b: cdefg\n1-3 a: abcde';
const str = num.split('\n');
//const wrapper = str => {
let qty = 0;
for (let i = 0; i < str.length; i++) {
  const elements = str[i].split(' ');
  const numbers = elements[0].split('-').map(Number);
  const letter = elements[1].slice(0, 1);
  const passAll = elements[2];
  const pass = passAll.slice('\n');
  if (
    pass.charAt(numbers[0] - 1) === letter &&
    pass.charAt(numbers[1] - 1) !== letter
  ) {
    //const res = (acc, value) => (qty++, acc + value);
    //const res = qty.reduce((acc, next) => acc + next);
    qty++;
    console.log(qty);
  }
  //console.log(res);
}
//return qty;
//};
//module.exports = { wrapper };
