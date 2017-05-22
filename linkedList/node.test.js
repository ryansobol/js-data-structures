'use strict';

const test = require('ava');
const Node = require('./node');

test('instantiate with no value, prev or next', (t) => {
  const node = new Node();

  t.is(node.value, null);
  t.is(node.prev, null);
  t.is(node.next, null);
});

test('instantiate with only a value', (t) => {
  const node = new Node(1);

  t.is(node.value, 1);
  t.is(node.prev, null);
  t.is(node.next, null);
});

test('instantiate with only a value and a prev', (t) => {
  const prev = new Node(1);
  const node = new Node(2, prev);

  t.is(node.value, 2);
  t.is(node.prev, prev);
  t.is(node.next, null);
});

test('instantiate with a value, a prev and a next', (t) => {
  const prev = new Node(1);
  const next = new Node(3);
  const node = new Node(2, prev, next);

  t.is(node.value, 2);
  t.is(node.prev, prev);
  t.is(node.next, next);
});

test('clear a non-empty instance', (t) => {
  const prev = new Node(1);
  const next = new Node(3);
  const node = new Node(2, prev, next);

  t.is(node.clear(), 2);

  t.is(node.value, null);
  t.is(node.prev, null);
  t.is(node.next, null);
});

test('clear an empty instance', (t) => {
  const node = new Node();

  t.is(node.clear(), null);

  t.is(node.value, null);
  t.is(node.prev, null);
  t.is(node.next, null);
});
