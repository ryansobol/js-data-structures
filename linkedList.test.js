/* eslint-disable max-lines, no-undefined */
'use strict';

const test = require('ava');
const LinkedList = require('./linkedList');

test('instantiate with no values', (t) => {
  const ll = new LinkedList();

  t.is(ll.length, 0);
  t.true(ll.isEmpty());
  t.is(ll.first(), undefined);
  t.is(ll.last(), undefined);
});

test('instantiate with one value', (t) => {
  const ll = new LinkedList(1);

  t.is(ll.length, 1);
  t.false(ll.isEmpty());
  t.is(ll.first(), 1);
  t.is(ll.last(), 1);
});

test('instantiate with two values', (t) => {
  const ll = new LinkedList(1, 2);

  t.is(ll.length, 2);
  t.false(ll.isEmpty());
  t.is(ll.first(), 1);
  t.is(ll.last(), 2);
});

test('instantiate with three value', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.length, 3);
  t.false(ll.isEmpty());
  t.is(ll.first(), 1);
  t.is(ll.last(), 3);
});

test('unshift one value into empty instance', (t) => {
  const ll = new LinkedList();

  ll.unshift(1);

  t.is(ll.length, 1);
  t.false(ll.isEmpty());
  t.is(ll.first(), 1);
  t.is(ll.last(), 1);
});

test('unshift two values into empty instance', (t) => {
  const ll = new LinkedList();

  ll.unshift(1);
  ll.unshift(2);

  t.is(ll.length, 2);
  t.false(ll.isEmpty());
  t.is(ll.first(), 2);
  t.is(ll.last(), 1);
});

test('unshift three values into empty instance', (t) => {
  const ll = new LinkedList();

  ll.unshift(1);
  ll.unshift(2);
  ll.unshift(3);

  t.is(ll.length, 3);
  t.false(ll.isEmpty());
  t.is(ll.first(), 3);
  t.is(ll.last(), 1);
});

test('unshift one value into non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  ll.unshift(4);

  t.is(ll.length, 4);
  t.false(ll.isEmpty());
  t.is(ll.first(), 4);
  t.is(ll.last(), 3);
});

test('shift one value from non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.shift(), 1);

  t.is(ll.length, 2);
  t.false(ll.isEmpty());
  t.is(ll.first(), 2);
  t.is(ll.last(), 3);
});

test('shift two values from non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.shift(), 1);
  t.is(ll.shift(), 2);

  t.is(ll.length, 1);
  t.false(ll.isEmpty());
  t.is(ll.first(), 3);
  t.is(ll.last(), 3);
});

test('shift three values from non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.shift(), 1);
  t.is(ll.shift(), 2);
  t.is(ll.shift(), 3);

  t.is(ll.length, 0);
  t.true(ll.isEmpty());
  t.is(ll.first(), undefined);
  t.is(ll.last(), undefined);
});

test('shift four values from non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.shift(), 1);
  t.is(ll.shift(), 2);
  t.is(ll.shift(), 3);
  t.is(ll.shift(), undefined);

  t.is(ll.length, 0);
  t.true(ll.isEmpty());
  t.is(ll.first(), undefined);
  t.is(ll.last(), undefined);
});

test('push one value into empty instance', (t) => {
  const ll = new LinkedList();

  ll.push(1);

  t.is(ll.length, 1);
  t.false(ll.isEmpty());
  t.is(ll.first(), 1);
  t.is(ll.last(), 1);
});

test('push two values into empty instance', (t) => {
  const ll = new LinkedList();

  ll.push(1);
  ll.push(2);

  t.is(ll.length, 2);
  t.false(ll.isEmpty());
  t.is(ll.first(), 1);
  t.is(ll.last(), 2);
});

test('push three values into empty instance', (t) => {
  const ll = new LinkedList();

  ll.push(1);
  ll.push(2);
  ll.push(3);

  t.is(ll.length, 3);
  t.false(ll.isEmpty());
  t.is(ll.first(), 1);
  t.is(ll.last(), 3);
});

test('push one value into non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  ll.push(4);

  t.is(ll.length, 4);
  t.false(ll.isEmpty());
  t.is(ll.first(), 1);
  t.is(ll.last(), 4);
});

test('pop one value from non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.pop(), 3);

  t.is(ll.length, 2);
  t.false(ll.isEmpty());
  t.is(ll.first(), 1);
  t.is(ll.last(), 2);
});

test('pop two values from non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.pop(), 3);
  t.is(ll.pop(), 2);

  t.is(ll.length, 1);
  t.false(ll.isEmpty());
  t.is(ll.first(), 1);
  t.is(ll.last(), 1);
});

test('pop three values from non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.pop(), 3);
  t.is(ll.pop(), 2);
  t.is(ll.pop(), 1);

  t.is(ll.length, 0);
  t.true(ll.isEmpty());
  t.is(ll.first(), undefined);
  t.is(ll.last(), undefined);
});

test('pop four values from non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.pop(), 3);
  t.is(ll.pop(), 2);
  t.is(ll.pop(), 1);
  t.is(ll.pop(), undefined);

  t.is(ll.length, 0);
  t.true(ll.isEmpty());
  t.is(ll.first(), undefined);
  t.is(ll.last(), undefined);
});

test('clear empty instance', (t) => {
  const ll = new LinkedList();

  t.is(ll.clear(), 0);

  t.is(ll.length, 0);
  t.true(ll.isEmpty());
  t.is(ll.first(), undefined);
  t.is(ll.last(), undefined);
});

test('clear non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.clear(), 3);

  t.is(ll.length, 0);
  t.true(ll.isEmpty());
  t.is(ll.first(), undefined);
  t.is(ll.last(), undefined);
});

test('iterate over non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  let expected = 1;

  for (const actual of ll) {
    t.is(actual, expected);

    expected += 1;
  }
});

test('convert empty instance to an array', (t) => {
  const ll = new LinkedList();

  t.deepEqual(ll.toArray(), []);
});

test('convert non-empty instance to an array', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.deepEqual(ll.toArray(), [1, 2, 3]);
});

test('convert empty instance to a string', (t) => {
  const ll = new LinkedList();

  t.is(ll.toString(), '');
});

test('convert to a string', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.toString(), '1, 2, 3');
});

test('search for the 0th value', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.search(1), 0);
});

test('search for the 1st value', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.search(2), 1);
});

test('search for the 2nd value', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.search(3), 2);
});

test('search for a non-existant value', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.search(4), undefined);
});

test('get 0th value of a non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.get(0), 1);
});

test('get 1st value of a non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.get(1), 2);
});

test('get 2nd value of a non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.get(2), 3);
});

test('get 3rd value of a non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.get(3), undefined);
});

test('get -1st value of a non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.get(-1), undefined);
});

test('set 0th value of a non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.set(0, 4), 4);

  t.deepEqual(ll.toArray(), [4, 2, 3]);
});

test('set 1st value of a non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.set(1, 5), 5);

  t.deepEqual(ll.toArray(), [1, 5, 3]);
});

test('set 2nd value of a non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.set(2, 6), 6);

  t.deepEqual(ll.toArray(), [1, 2, 6]);
});

test('set 3rd value of a non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.set(3, 7), undefined);

  t.deepEqual(ll.toArray(), [1, 2, 3]);
});

test('set -1st value of a non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.set(-1, -1), undefined);

  t.deepEqual(ll.toArray(), [1, 2, 3]);
});

test('insert 0th value into non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.insert(0, 4), 4);

  t.deepEqual(ll.toArray(), [4, 1, 2, 3]);
});

test('insert 1st value into non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.insert(1, 5), 5);

  t.deepEqual(ll.toArray(), [1, 5, 2, 3]);
});

test('insert 2nd value into non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.insert(2, 6), 6);

  t.deepEqual(ll.toArray(), [1, 2, 6, 3]);
});

test('insert 3rd value into non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.insert(3, 7), 7);

  t.deepEqual(ll.toArray(), [1, 2, 3, 7]);
});

test('insert 4th value into non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.insert(4, 8), undefined);

  t.deepEqual(ll.toArray(), [1, 2, 3]);
});

test('insert -1st value into non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.insert(-1, -1), undefined);

  t.deepEqual(ll.toArray(), [1, 2, 3]);
});

test('delete 0th value from non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.delete(0), 1);

  t.deepEqual(ll.toArray(), [2, 3]);
});

test('delete 1st value from non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.delete(1), 2);

  t.deepEqual(ll.toArray(), [1, 3]);
});

test('delete 2nd value from non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.delete(2), 3);

  t.deepEqual(ll.toArray(), [1, 2]);
});

test('delete 3rd value from non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.delete(3), undefined);

  t.deepEqual(ll.toArray(), [1, 2, 3]);
});

test('delete -1st value from non-empty instance', (t) => {
  const ll = new LinkedList(1, 2, 3);

  t.is(ll.delete(-1), undefined);

  t.deepEqual(ll.toArray(), [1, 2, 3]);
});
