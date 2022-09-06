'use strict';
const wrap = require('./2day2');
const num = '1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc';
const strings = num.slice(/\d+-\d+\s[a-z]:\s\w+/g);
const str = strings.split('\n');

test('How many passwords are valid', () => {
  const result = wrap.wrapper(str);
  expect(result).toBeNumber(1);
  //expect(result).toBeLessThan(1000);
});
