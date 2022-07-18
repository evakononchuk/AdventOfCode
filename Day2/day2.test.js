'use strict';
const data = require('./day2.js');
const fs = require('fs');
const { describe } = require('yargs');
const num = fs.readFileSync(
  '/Users/Elena/AdventOfCode/Day2/input_02.txt',
  'utf-8'
);
const strings = num.slice(/\d+-\d+\s[a-z]:\s\w+/g);
const str = strings.split('\n');

test('Count quantity correct passwords', () => {
  const result = data.wrapper(str);
  expect(result).toBe(396);
});
