'use strict';
const wrap = require('./2day2base');
const fs = require('fs');
const num = fs.readFileSync(
  '/Users/Elena/AdventOfCode/Day2p2/sample2.txt',
  'utf-8'
);
const strings = num.slice(/\d+-\d+\s[a-z]:\s\w+/g);
const str = strings.split('\n');
const result = wrap.wrapper(str);
