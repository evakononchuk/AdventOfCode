'use strict';
const arr = [1721, 979, 366, 299, 675, 1456];

const searchTwoNumbers = arr => {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] + arr[j] === 2020) {
        const a = arr[i];
        const b = arr[j];
        const array = [a, b];
        return array;
      }
    }
  }
};

searchTwoNumbers(arr);

module.exports = { searchTwoNumbers };
