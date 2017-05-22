'use strict';

const test = require('ava');
const Set = require('./set');

test('instantiate with no values', (t) => {
  const set = new Set();

  t.is(set.length, 0);
  t.is(set.toString(), '');
});

test('instantiate with one value', (t) => {
  const set = new Set(42);

  t.is(set.length, 1);
  t.is(set.toString(), '42');
});

test('instantiate with two values', (t) => {
  const set = new Set(42, 40);

  t.is(set.length, 2);
  t.is(set.toString(), '40,42');
});

test('instantiate with three values', (t) => {
  const set = new Set(42, 40, 41);

  t.is(set.length, 3);
  t.is(set.toString(), '40,41,42');
});

test('instantiate with four values', (t) => {
  const set = new Set(42, 40, 41, 42);

  t.is(set.length, 3);
  t.is(set.toString(), '40,41,42');
});

test('insert one value', (t) => {
  const set = new Set();

  t.is(set.insert(42), 42);

  t.true(set.doesExist(42));

  t.is(set.length, 1);
  t.is(set.toString(), '42');
});

test('insert two values', (t) => {
  const set = new Set();

  t.is(set.insert(42), 42);
  t.is(set.insert(40), 40);

  t.true(set.doesExist(42));
  t.true(set.doesExist(40));

  t.is(set.length, 2);
  t.is(set.toString(), '40,42');
});

test('insert three values', (t) => {
  const set = new Set();

  t.is(set.insert(42), 42);
  t.is(set.insert(40), 40);
  t.is(set.insert(41), 41);

  t.true(set.doesExist(42));
  t.true(set.doesExist(40));
  t.true(set.doesExist(41));

  t.is(set.length, 3);
  t.is(set.toString(), '40,41,42');
});

test('insert four values', (t) => {
  const set = new Set();

  t.is(set.insert(42), 42);
  t.is(set.insert(40), 40);
  t.is(set.insert(41), 41);
  t.is(set.insert(42), 42);

  t.true(set.doesExist(42));
  t.true(set.doesExist(40));
  t.true(set.doesExist(41));

  t.is(set.length, 3);
  t.is(set.toString(), '40,41,42');
});

test('delete one value', (t) => {
  const set = new Set(42, 40, 41);

  t.is(set.delete(40), 40);

  t.false(set.doesExist(40));

  t.is(set.length, 2);
  t.is(set.toString(), '41,42');
});

test('delete two values', (t) => {
  const set = new Set(42, 40, 41);

  t.is(set.delete(40), 40);
  t.is(set.delete(42), 42);

  t.false(set.doesExist(40));
  t.false(set.doesExist(42));

  t.is(set.length, 1);
  t.is(set.toString(), '41');
});

test('delete three values', (t) => {
  const set = new Set(42, 40, 41);

  t.is(set.delete(40), 40);
  t.is(set.delete(42), 42);
  t.is(set.delete(41), 41);

  t.false(set.doesExist(40));
  t.false(set.doesExist(42));
  t.false(set.doesExist(41));

  t.is(set.length, 0);
  t.is(set.toString(), '');
});

test('delete four values', (t) => {
  const set = new Set(42, 40, 41);

  t.is(set.delete(40), 40);
  t.is(set.delete(42), 42);
  t.is(set.delete(41), 41);
  t.is(set.delete(40), 40);

  t.false(set.doesExist(40));
  t.false(set.doesExist(42));
  t.false(set.doesExist(41));

  t.is(set.length, 0);
  t.is(set.toString(), '');
});

test('iterator', (t) => {
  const set = new Set(1, 2, 3);

  let expected = 1;

  for (const actual of set) {
    t.is(actual, expected.toString());

    expected += 1;
  }
});

test('find intersection', (t) => {
  const set1 = new Set(1, 2, 3, 4, 5);
  const set2 = new Set(2, 5, 6);

  const set3 = set1.intersection(set2);

  t.is(set3.length, 2);
  t.is(set3.toString(), '2,5');
});

test('find union', (t) => {
  const set1 = new Set(1, 2, 3, 4, 5);
  const set2 = new Set(2, 5, 6);

  const set3 = set1.union(set2);

  t.is(set3.length, 6);
  t.is(set3.toString(), '1,2,3,4,5,6');
});
