'use strict';
const data = require('./day1_p1');

describe('Searching sum and multy from two entries', () => {
  test('Two entries that sum to 2020 and get result multy it', () => {
    const arr = [1721, 979, 366, 299, 675, 1456];
    const result = data.searchTwoNumbers(arr);
    expect(result).toHaveLength(2);
    expect(result[0] + result[1]).toBe(2020);
    expect(result[0] * result[1]).toBe(514579);
  });
});
