'use strict';

const test = require('ava');

require('./array');

test('find first duplicate in sorted array', (t) => {
  t.is([1, 1, 2, 3].findFirstDuplicate(), 1);
  t.is([1, 2, 2, 3].findFirstDuplicate(), 2);
  t.is([1, 2, 3, 3].findFirstDuplicate(), 3);

  t.is([1, 2, 3, 4].findFirstDuplicate(), null);
  t.is([1, 2, 3].findFirstDuplicate(), null);
  t.is([1, 2].findFirstDuplicate(), null);
  t.is([1].findFirstDuplicate(), null);
  t.is([].findFirstDuplicate(), null);
});

test('remove duplicates of sorted array in place', (t) => {
  t.deepEqual([1].removeDuplcatesSet(), [1]);
  t.deepEqual([1, 1].removeDuplcatesSet(), [1]);
  t.deepEqual([1, 1, 1].removeDuplcatesSet(), [1]);

  t.deepEqual([1, 1, 2].removeDuplcatesSet(), [1, 2]);
  t.deepEqual([1, 1, 1, 2].removeDuplcatesSet(), [1, 2]);
  t.deepEqual([1, 2, 2].removeDuplcatesSet(), [1, 2]);
  t.deepEqual([1, 2, 2, 2].removeDuplcatesSet(), [1, 2]);

  t.deepEqual([1, 1, 1, 2, 3].removeDuplcatesSet(), [1, 2, 3]);
  t.deepEqual([1, 2, 2, 2, 3].removeDuplcatesSet(), [1, 2, 3]);
  t.deepEqual([1, 2, 2, 3, 3].removeDuplcatesSet(), [1, 2, 3]);
});

// eslint-disable-next-line max-statements
test('remove duplicates of sorted array in place', (t) => {
  let array = [1];

  t.is(array.removeDuplcatesInPlace(), 1);
  t.deepEqual(array, [1]);

  array = [1, 1];

  t.is(array.removeDuplcatesInPlace(), 1);
  t.deepEqual(array, [1]);

  array = [1, 1, 1];

  t.is(array.removeDuplcatesInPlace(), 1);
  t.deepEqual(array, [1]);

  array = [1, 1, 2];

  t.is(array.removeDuplcatesInPlace(), 2);
  t.deepEqual(array, [1, 2]);

  array = [1, 2, 2];

  t.is(array.removeDuplcatesInPlace(), 2);
  t.deepEqual(array, [1, 2]);

  array = [1, 1, 2, 3];

  t.is(array.removeDuplcatesInPlace(), 3);
  t.deepEqual(array, [1, 2, 3]);

  array = [1, 2, 2, 3];

  t.is(array.removeDuplcatesInPlace(), 3);
  t.deepEqual(array, [1, 2, 3]);

  array = [1, 2, 3, 3];

  t.is(array.removeDuplcatesInPlace(), 3);
  t.deepEqual(array, [1, 2, 3]);
});

test('list all anagrams', (t) => {
  const anagrams = ['dog', 'cat', 'ddd', 'goo', 'act', 'god'];

  t.deepEqual(anagrams.listAllAnagrams(), ['dog', 'god', 'cat', 'act']);
});
