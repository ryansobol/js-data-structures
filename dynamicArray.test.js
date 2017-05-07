/* eslint-disable no-undefined */
'use strict';

const test = require('ava');
const DynamicArray = require('./dynamicArray');

test('instantiate with no length', (t) => {
  const array = new DynamicArray();

  t.is(array.length, 0);
  t.is(array.capacity, 0);
});

test('instantiate with the minimum length', (t) => {
  const length = 0;
  const array = new DynamicArray(length);

  t.is(array.length, length);
  t.is(array.capacity, length * 2);
});

test('instantiate with the maximum length', (t) => {
  const length = Math.pow(2, 32) / 4 - 1;
  const array = new DynamicArray(length);

  t.is(array.length, length);
  t.is(array.capacity, length * 2);
});

test('instantiate under the minimum length', (t) => {
  const length = -1;

  const error = t.throws(() => {
    new DynamicArray(length);
  }, RangeError);

  t.is(error.message, 'Invalid typed array length');
});


test('instantiate over the maximum length', (t) => {
  const length = Math.pow(2, 32) / 4;

  const error = t.throws(() => {
    new DynamicArray(length);
  }, RangeError);

  t.is(error.message, 'Invalid typed array length');
});

test('get -1st element', (t) => {
  const array = new DynamicArray(1);

  t.is(array.get(-1), undefined);
});

test('get 0th element', (t) => {
  const array = new DynamicArray(1);

  t.is(array.get(0), 0);
});

test('get 1st element', (t) => {
  const array = new DynamicArray(1);

  t.is(array.get(1), undefined);
});

test('get 2nd element', (t) => {
  const array = new DynamicArray(1);

  t.is(array.get(2), undefined);
});
