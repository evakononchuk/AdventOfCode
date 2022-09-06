'use strict';
const wrap = require('./day2base');
const fs = require('fs');
const num = fs.readFileSync(
  '/Users/Elena/AdventOfCode/Day2/input_02.txt',
  'utf-8'
);
const strings = num.slice(/\d+-\d+\s[a-z]:\s\w+/g);
const str = strings.split('\n');
const result = wrap.wrapper(str);
