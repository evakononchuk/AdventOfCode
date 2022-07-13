'use strict';
const fs = require('fs');
const arr = fs
  .readFileSync('/Users/Elena/AdventOfCode/Day1/input_01.txt', 'utf-8')
  .split('\n')
  .map(x => parseInt(x));

const searchThreeNumbers = arr => {
  for (let i = 0; i <= arr.length; i++) {
    for (let b = i + 1; b <= arr.length; b++) {
      for (let j = i + 2; j <= arr.length; j++) {
        if (arr[i] + arr[b] + arr[j] === 2020) {
          const array = [arr[i], arr[b], arr[j]];
          return array;
        }
      }
    }
  }
};
searchThreeNumbers(arr);
module.exports = { searchThreeNumbers };
