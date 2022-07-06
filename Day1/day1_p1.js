'use strict';

const arr = [1721, 979, 366, 299, 675, 1456];
let a = 0;
let b = 0;
const sum = () => {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] + arr[j] === 2020) {
        a = arr[i];
        b = arr[j];
        console.log(a + b);
      }
    }
  }
};

const multy = (a, b) => a * b;

module.exports = { sum, multy };
