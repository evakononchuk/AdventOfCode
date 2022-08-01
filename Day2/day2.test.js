'use strict';
const wrap = require('./day2');
const num = '1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc';
const strings = num.slice(/\d+-\d+\s[a-z]:\s\w+/g);
const str = strings.split('\n');

test('Count quantity correct passwords', () => {
  const result = wrap.wrapper(str);
  expect(result).toBe(2);
});
