'use strict';
const wrap = require('./p2day2');
const num = '1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc';
const strings = num.slice(/\d+-\d+\s[a-z]:\s\w+/g);
const str = num.split('\n');

test('How many passwords are valid', () => {
  const result = wrap.wrapper(str);
  expect(result).toBeNumber();
  expect(result).toBeLessThan(1000);
});

console.log(strings);
