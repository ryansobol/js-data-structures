'use strict';

const test = require('ava');
const number = require('./number');

test('if a number is a power of 2', (t) => {
  t.true(Number.isPowerOfTwo(1));    // 2^0 = 1
  t.true(Number.isPowerOfTwo(2));    // 2^1 = 2
  t.false(Number.isPowerOfTwo(3));
  t.true(Number.isPowerOfTwo(4));    // 2^2 = 4
  t.false(Number.isPowerOfTwo(5));
  t.false(Number.isPowerOfTwo(6));
  t.false(Number.isPowerOfTwo(7));
  t.true(Number.isPowerOfTwo(8));    // 2^3 = 8
  t.false(Number.isPowerOfTwo(9));
  t.false(Number.isPowerOfTwo(10));
  t.false(Number.isPowerOfTwo(11));
  t.false(Number.isPowerOfTwo(12));
  t.false(Number.isPowerOfTwo(13));
  t.false(Number.isPowerOfTwo(14));
  t.false(Number.isPowerOfTwo(15));
  t.true(Number.isPowerOfTwo(16));   // 2^4 = 16
});
