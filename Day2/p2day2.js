'use strict';
const wrap = require('./p2day2base');
const fs = require('fs');
const num = fs.readFileSync('/Users/Elena/AdventOfCode/sample2.txt', 'utf-8');
const str = num.split('\n');
const result = wrap.wrapper(str);
//console.log(result);
