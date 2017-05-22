'use strict';

const test = require('ava');
const binary = require('./binary');

test('count the ones in a number', (t) => {
  t.is(binary.countOnesString(0), 0);
  t.is(binary.countOnesString(1), 1);
  t.is(binary.countOnesString(2), 1);
  t.is(binary.countOnesString(3), 2);
  t.is(binary.countOnesString(4), 1);
  t.is(binary.countOnesString(5), 2);
  t.is(binary.countOnesString(6), 2);
  t.is(binary.countOnesString(7), 3);
  t.is(binary.countOnesString(8), 1);
  t.is(binary.countOnesString(9), 2);
  t.is(binary.countOnesString(10), 2);
  t.is(binary.countOnesString(11), 3);
  t.is(binary.countOnesString(12), 2);
  t.is(binary.countOnesString(13), 3);
  t.is(binary.countOnesString(14), 3);
  t.is(binary.countOnesString(15), 4);
  t.is(binary.countOnesString(16), 1);

  t.is(binary.countOnesBitwise(0), 0);
  t.is(binary.countOnesBitwise(1), 1);
  t.is(binary.countOnesBitwise(2), 1);
  t.is(binary.countOnesBitwise(3), 2);
  t.is(binary.countOnesBitwise(4), 1);
  t.is(binary.countOnesBitwise(5), 2);
  t.is(binary.countOnesBitwise(6), 2);
  t.is(binary.countOnesBitwise(7), 3);
  t.is(binary.countOnesBitwise(8), 1);
  t.is(binary.countOnesBitwise(9), 2);
  t.is(binary.countOnesBitwise(10), 2);
  t.is(binary.countOnesBitwise(11), 3);
  t.is(binary.countOnesBitwise(12), 2);
  t.is(binary.countOnesBitwise(13), 3);
  t.is(binary.countOnesBitwise(14), 3);
  t.is(binary.countOnesBitwise(15), 4);
  t.is(binary.countOnesBitwise(16), 1);

  t.is(binary.countOnesOptimized(0), 0);
  t.is(binary.countOnesOptimized(1), 1);
  t.is(binary.countOnesOptimized(2), 1);
  t.is(binary.countOnesOptimized(3), 2);
  t.is(binary.countOnesOptimized(4), 1);
  t.is(binary.countOnesOptimized(5), 2);
  t.is(binary.countOnesOptimized(6), 2);
  t.is(binary.countOnesOptimized(7), 3);
  t.is(binary.countOnesOptimized(8), 1);
  t.is(binary.countOnesOptimized(9), 2);
  t.is(binary.countOnesOptimized(10), 2);
  t.is(binary.countOnesOptimized(11), 3);
  t.is(binary.countOnesOptimized(12), 2);
  t.is(binary.countOnesOptimized(13), 3);
  t.is(binary.countOnesOptimized(14), 3);
  t.is(binary.countOnesOptimized(15), 4);
  t.is(binary.countOnesOptimized(16), 1);
});

// 128 64 32 16 8 4 2 1
