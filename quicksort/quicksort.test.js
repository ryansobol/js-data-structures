'use strict';

const test = require('ava');
const Quicksort = require('./quicksort');

test('sorts an array', (t) => {
  const qs = new Quicksort(1314, 12, 947, 423, 5876, 6, 689, 563, 89);

  qs.sort();

  t.deepEqual(qs.values, [6, 12, 89, 423, 563, 689, 947, 1314, 5876]);
});
