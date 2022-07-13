'use strict';
const data = require('./day1_p2');
const fs = require('fs');
const arr = fs
  .readFileSync('/Users/Elena/AdventOfCode/Day1/input_01.txt', 'utf-8')
  .split('\n')
  .map(x => parseInt(x));

test('Three entries that sum to 2020 and get result multy it', () => {
  const result = data.searchThreeNumbers(arr);
  expect(result).toHaveLength(3);
  expect(result[0] + result[1] + result[2]).toBe(2020);
  expect(result[0] * result[1] * result[2]).toBe(158661360);
});
