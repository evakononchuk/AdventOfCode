'use strict';
const wrap = require('./2day2');
const num = '3-4 l: blllk\n1-5 j: jjjjgj\n1-3 b: cdefg\n1-3 a: abcde';
const strings = num.slice(/\d+-\d+\s[a-z]:\s\w+/g);
const str = strings.split('\n');

test('How many passwords are valid', () => {
  const result = wrap.wrapper(str);
  expect(result).toBeNumber(2);
  //expect(result).toBeLessThan(1000);
});
