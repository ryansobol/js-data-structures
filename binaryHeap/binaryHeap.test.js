'use strict';

const test = require('ava');
const BinaryHeap = require('./binaryHeap');

test('instantiate with no values', (t) => {
  const heap = new BinaryHeap();

  t.is(heap.length, 0);
  t.is(heap.toString(), '');
});

test('instantiate with one value', (t) => {
  const heap = new BinaryHeap(42);

  t.is(heap.length, 1);
  t.is(heap.toString(), '42');
});

test('instantiate with two values', (t) => {
  const heap = new BinaryHeap(42, 40);

  t.is(heap.length, 2);
  t.is(heap.toString(), '40,42');
});

test('instantiate with three values', (t) => {
  const heap = new BinaryHeap(42, 40, 44);

  t.is(heap.length, 3);
  t.is(heap.toString(), '40,42,44');
});

test('instantiate with four values', (t) => {
  const heap = new BinaryHeap(42, 40, 44, 41);

  t.is(heap.length, 4);
  t.is(heap.toString(), '40,41,44,42');
});

test('instantiate with five values', (t) => {
  const heap = new BinaryHeap(42, 40, 44, 41, 43);

  t.is(heap.length, 5);
  t.is(heap.toString(), '40,41,44,42,43');
});

test('insert one value', (t) => {
  const heap = new BinaryHeap();

  t.is(heap.insert(42), 42);

  t.is(heap.length, 1);
  t.is(heap.toString(), '42');
});

test('insert two values', (t) => {
  const heap = new BinaryHeap();

  t.is(heap.insert(42), 42);
  t.is(heap.insert(40), 40);

  t.is(heap.length, 2);
  t.is(heap.toString(), '40,42');
});

test('insert three values', (t) => {
  const heap = new BinaryHeap();

  t.is(heap.insert(42), 42);
  t.is(heap.insert(40), 40);
  t.is(heap.insert(44), 44);

  t.is(heap.length, 3);
  t.is(heap.toString(), '40,42,44');
});

test('insert four values', (t) => {
  const heap = new BinaryHeap();

  t.is(heap.insert(42), 42);
  t.is(heap.insert(40), 40);
  t.is(heap.insert(44), 44);
  t.is(heap.insert(41), 41);

  t.is(heap.length, 4);
  t.is(heap.toString(), '40,41,44,42');
});

test('insert five values', (t) => {
  const heap = new BinaryHeap();

  t.is(heap.insert(42), 42);
  t.is(heap.insert(40), 40);
  t.is(heap.insert(44), 44);
  t.is(heap.insert(41), 41);
  t.is(heap.insert(43), 43);

  t.is(heap.length, 5);
  t.is(heap.toString(), '40,41,44,42,43');
});

test('extract one value', (t) => {
  const heap = new BinaryHeap(42, 40, 44, 41, 43);

  t.is(heap.extract(), 40);

  t.is(heap.length, 4);
  t.is(heap.toString(), '41,42,44,43');
});

test('extract two values', (t) => {
  const heap = new BinaryHeap(42, 40, 44, 41, 43);

  t.is(heap.extract(), 40);
  t.is(heap.extract(), 41);

  t.is(heap.length, 3);
  t.is(heap.toString(), '42,43,44');
});

test('extract three values', (t) => {
  const heap = new BinaryHeap(42, 40, 44, 41, 43);

  t.is(heap.extract(), 40);
  t.is(heap.extract(), 41);
  t.is(heap.extract(), 42);

  t.is(heap.length, 2);
  t.is(heap.toString(), '43,44');
});

test('extract four values', (t) => {
  const heap = new BinaryHeap(42, 40, 44, 41, 43);

  t.is(heap.extract(), 40);
  t.is(heap.extract(), 41);
  t.is(heap.extract(), 42);
  t.is(heap.extract(), 43);

  t.is(heap.length, 1);
  t.is(heap.toString(), '44');
});

test('extract five values', (t) => {
  const heap = new BinaryHeap(42, 40, 44, 41, 43);

  t.is(heap.extract(), 40);
  t.is(heap.extract(), 41);
  t.is(heap.extract(), 42);
  t.is(heap.extract(), 43);
  t.is(heap.extract(), 44);

  t.is(heap.length, 0);
  t.is(heap.toString(), '');
});

test('extract six values', (t) => {
  const heap = new BinaryHeap(42, 40, 44, 41, 43);

  t.is(heap.extract(), 40);
  t.is(heap.extract(), 41);
  t.is(heap.extract(), 42);
  t.is(heap.extract(), 43);
  t.is(heap.extract(), 44);

  // eslint-disable-next-line no-undefined
  t.is(heap.extract(), undefined);

  t.is(heap.length, 0);
  t.is(heap.toString(), '');
});
