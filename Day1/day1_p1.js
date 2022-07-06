'use strict';

const arr = [1721, 979, 366, 299, 675, 1456];
for (let i = 0; i <= arr.length; i++) {
  for (let j = i + 1; j <= arr.length; j++) {
    if (arr[i] + arr[j] === 2020) {
      console.log(arr[i] * arr[j]);
    }
  }
}
