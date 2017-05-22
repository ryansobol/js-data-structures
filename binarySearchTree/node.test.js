'use strict';

const test = require('ava');
const Node = require('./Node');

test('instantiate with no arguments', (t) => {
  const node = new Node();

  t.is(node.key, null);
  t.is(node.left, null);
  t.is(node.right, null);

  t.is(node.toString(), '');
});

test('instantiate with key', (t) => {
  const node = new Node(42);

  t.is(node.key, 42);
  t.is(node.left, null);
  t.is(node.right, null);

  t.is(node.toString(), '42');
});

test('instantiate with key and left child', (t) => {
  const left = new Node(41);
  const node = new Node(42, left);

  t.is(node.key, 42);
  t.is(node.left, left);
  t.is(node.right, null);

  t.is(node.toString(), '41 42');
});

test('instantiate with key and right child', (t) => {
  const right = new Node(43);
  const node = new Node(42, null, right);

  t.is(node.key, 42);
  t.is(node.left, null);
  t.is(node.right, right);

  t.is(node.toString(), '42 43');
});

test('instantiate with key, left child and right child', (t) => {
  const left = new Node(41);
  const right = new Node(43);
  const node = new Node(42, left, right);

  t.is(node.key, 42);
  t.is(node.left, left);
  t.is(node.right, right);

  t.is(node.toString(), '41 42 43');
});

test('find key', (t) => {
  const left = new Node(41);
  const right = new Node(43);
  const node = new Node(42, left, right);

  t.true(node.find(42));
});

test("find left's key", (t) => {
  const left = new Node(41);
  const right = new Node(43);
  const node = new Node(42, left, right);

  t.true(node.find(41));
});

test("find right's key", (t) => {
  const left = new Node(41);
  const right = new Node(43);
  const node = new Node(42, left, right);

  t.true(node.find(43));
});

test('not find a key of non-empty node', (t) => {
  const left = new Node(41);
  const right = new Node(43);
  const node = new Node(42, left, right);

  t.false(node.find(0));
});

test('not find a key of empty node', (t) => {
  const node = new Node();

  t.false(node.find(0));
});

test('is node with no children a binary search tree', (t) => {
  const node = new Node(42);

  t.true(node.isBSTMinMax(-Number.MAX_VALUE, Number.MAX_VALUE));
});

test('is node with only a left child a binary search tree', (t) => {
  const left = new Node(41);
  const node = new Node(42, left);

  t.true(node.isBSTMinMax(-Number.MAX_VALUE, Number.MAX_VALUE));
});

test('is node with only a right child a binary search tree', (t) => {
  const right = new Node(43);
  const node = new Node(42, null, right);

  t.true(node.isBSTMinMax(-Number.MAX_VALUE, Number.MAX_VALUE));
});

test('is a node with both children a binary search tree', (t) => {
  const left = new Node(41);
  const right = new Node(43);
  const node = new Node(42, left, right);

  t.true(node.isBSTMinMax(-Number.MAX_VALUE, Number.MAX_VALUE));
});

test('is a node with an invalid left child not a binary search tree', (t) => {
  const left = new Node(43);
  const node = new Node(42, left);

  t.false(node.isBSTMinMax(-Number.MAX_VALUE, Number.MAX_VALUE));
});

test('is a node with an invalid right child not a binary search tree', (t) => {
  const right = new Node(41);
  const node = new Node(42, null, right);

  t.false(node.isBSTMinMax(-Number.MAX_VALUE, Number.MAX_VALUE));
});

test('is a node with both invalid children not a binary search tree', (t) => {
  const left = new Node(43);
  const right = new Node(41);
  const node = new Node(42, left, right);

  t.false(node.isBSTMinMax(-Number.MAX_VALUE, Number.MAX_VALUE));
});

test('lowest common ancestor for node with no children', (t) => {
  const node = new Node(42);

  t.is(node.lowestCommonAncestor(41, 43), null);
});

test('lowest common ancestor for node with one left child', (t) => {
  const left = new Node(41);
  const node = new Node(42, left);

  t.is(node.lowestCommonAncestor(41, 43), 41);
});

test('lowest common ancestor for node with one right child', (t) => {
  const right = new Node(43);
  const node = new Node(42, null, right);

  t.is(node.lowestCommonAncestor(41, 43), 43);
});

test('lowest common ancestor for node with two children', (t) => {
  const left = new Node(41);
  const right = new Node(43);
  const node = new Node(42, left, right);

  t.is(node.lowestCommonAncestor(41, 43), 42);
});
