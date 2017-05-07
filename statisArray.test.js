/* eslint-disable no-undefined */
'use strict';

const test = require('ava');
const StaticArray = require('./staticArray');

test('instantiate with no length', (t) => {
  const array = new StaticArray(0);

  t.is(array.length, 0);
});

test('instantiate with small length', (t) => {
  const array = new StaticArray(1);

  t.is(array.length, 1);
});

test('instantiate with large length', (t) => {
  const array = new StaticArray(1000000);

  t.is(array.length, 1000000);
});

test('get value from valid index', (t) => {
  const array = new StaticArray(1);
  const index = 0;

  t.is(array.get(index), undefined);
});

test('get value from invalid index', (t) => {
  const array = new StaticArray(1);
  const index = 1;

  const error = t.throws(() => {
    array.get(index);
  }, RangeError);

  t.is(error.message, `invalid index ${index}`);
});

test('set value to valid index', (t) => {
  const array = new StaticArray(1);
  const index = 0;

  t.is(array.set(index, 42), 42);
  t.is(array.get(index), 42);
});

test('set value to invalid index', (t) => {
  const array = new StaticArray(1);
  const index = 1;

  const error = t.throws(() => {
    array.set(index, 42);
  }, RangeError);

  t.is(error.message, `invalid index ${index}`);
});
