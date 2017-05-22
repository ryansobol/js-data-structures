'use strict';

const test = require('ava');

require('./array');

test('remove duplicates of sorted array in place', (t) => {
  t.is([1].removeDuplcatesInPlace(), 1);
  t.is([1, 1].removeDuplcatesInPlace(), 1);
  t.is([1, 1, 1].removeDuplcatesInPlace(), 1);
  t.is([1, 1, 1, 1].removeDuplcatesInPlace(), 1);

  t.is([1, 1, 2].removeDuplcatesInPlace(), 2);
  t.is([1, 1, 1, 2].removeDuplcatesInPlace(), 2);

  t.is([1, 2, 2].removeDuplcatesInPlace(), 2);
  t.is([1, 2, 2, 2].removeDuplcatesInPlace(), 2);

  t.is([1, 1, 1, 2, 3].removeDuplcatesInPlace(), 3);
  t.is([1, 2, 2, 2, 3].removeDuplcatesInPlace(), 3);
  t.is([1, 2, 2, 3, 3].removeDuplcatesInPlace(), 3);
});
