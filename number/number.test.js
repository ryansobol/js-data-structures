'use strict';

const test = require('ava');
const number = require('./number');

test('if a number is a power of 2', (t) => {
  t.true(number.isPowerOfTwo(1));    // 2^0 = 1
  t.true(number.isPowerOfTwo(2));    // 2^1 = 2
  t.false(number.isPowerOfTwo(3));
  t.true(number.isPowerOfTwo(4));    // 2^2 = 4
  t.false(number.isPowerOfTwo(5));
  t.false(number.isPowerOfTwo(6));
  t.false(number.isPowerOfTwo(7));
  t.true(number.isPowerOfTwo(8));    // 2^3 = 8
  t.false(number.isPowerOfTwo(9));
  t.false(number.isPowerOfTwo(10));
  t.false(number.isPowerOfTwo(11));
  t.false(number.isPowerOfTwo(12));
  t.false(number.isPowerOfTwo(13));
  t.false(number.isPowerOfTwo(14));
  t.false(number.isPowerOfTwo(15));
  t.true(number.isPowerOfTwo(16));   // 2^4 = 16
});
