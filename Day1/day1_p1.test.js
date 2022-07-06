'use strict';
const data = require('./day1_p1');

describe('Searching sum and multy from two entries', () => {
  test('Two entries that sum to 2020', () => {
    expect(data.sum).toBe(2020);
  });

  test('Two entries multiply them together', () => {
    expect(data.multy).toBe(514579);
  });
});
