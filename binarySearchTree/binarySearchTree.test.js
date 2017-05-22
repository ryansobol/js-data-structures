'use strict';

const test = require('ava');
const BinarySearchTree = require('./binarySearchTree');

test('instantiate with no values', (t) => {
  const bst = new BinarySearchTree();

  t.is(bst.length, 0);
  t.is(bst.toString(), '');
});

test('instantiate with one value', (t) => {
  const bst = new BinarySearchTree(42);

  t.is(bst.length, 1);
  t.is(bst.toString(), '42');
});

test('instantiate with two values', (t) => {
  const bst = new BinarySearchTree(42, 40);

  t.is(bst.length, 2);
  t.is(bst.toString(), '40 42');
});

test('instantiate with three values', (t) => {
  const bst = new BinarySearchTree(42, 40, 44);

  t.is(bst.length, 3);
  t.is(bst.toString(), '40 42 44');
});

test('instantiate with four values', (t) => {
  const bst = new BinarySearchTree(42, 40, 44, 41);

  t.is(bst.length, 4);
  t.is(bst.toString(), '40 41 42 44');
});

test('instantiate with five values', (t) => {
  const bst = new BinarySearchTree(42, 40, 44, 41, 43);

  t.is(bst.length, 5);
  t.is(bst.toString(), '40 41 42 43 44');
});

test('instantiate with six values', (t) => {
  const bst = new BinarySearchTree(42, 40, 44, 41, 43, 43);

  t.is(bst.length, 5);
  t.is(bst.toString(), '40 41 42 43 44');
});

test('insert iteratively one value', (t) => {
  const bst = new BinarySearchTree();

  t.is(bst.insertIteratively(42), 42);

  t.is(bst.length, 1);
  t.is(bst.toString(), '42');
});

test('insert iteratively two values', (t) => {
  const bst = new BinarySearchTree();

  t.is(bst.insertIteratively(42), 42);
  t.is(bst.insertIteratively(40), 40);

  t.is(bst.length, 2);
  t.is(bst.toString(), '40 42');
});

test('insert iteratively three values', (t) => {
  const bst = new BinarySearchTree();

  t.is(bst.insertIteratively(42), 42);
  t.is(bst.insertIteratively(40), 40);
  t.is(bst.insertIteratively(44), 44);

  t.is(bst.length, 3);
  t.is(bst.toString(), '40 42 44');
});

test('insert iteratively four values', (t) => {
  const bst = new BinarySearchTree();

  t.is(bst.insertIteratively(42), 42);
  t.is(bst.insertIteratively(40), 40);
  t.is(bst.insertIteratively(44), 44);
  t.is(bst.insertIteratively(41), 41);

  t.is(bst.length, 4);
  t.is(bst.toString(), '40 41 42 44');
});

test('insert iteratively five values', (t) => {
  const bst = new BinarySearchTree();

  t.is(bst.insertIteratively(42), 42);
  t.is(bst.insertIteratively(40), 40);
  t.is(bst.insertIteratively(44), 44);
  t.is(bst.insertIteratively(41), 41);
  t.is(bst.insertIteratively(43), 43);

  t.is(bst.length, 5);
  t.is(bst.toString(), '40 41 42 43 44');
});

test('insert iteratively six values', (t) => {
  const bst = new BinarySearchTree();

  t.is(bst.insertIteratively(42), 42);
  t.is(bst.insertIteratively(40), 40);
  t.is(bst.insertIteratively(44), 44);
  t.is(bst.insertIteratively(41), 41);
  t.is(bst.insertIteratively(43), 43);
  t.is(bst.insertIteratively(43), 43);

  t.is(bst.length, 5);
  t.is(bst.toString(), '40 41 42 43 44');
});

test('insert recursively one value', (t) => {
  const bst = new BinarySearchTree();

  t.is(bst.insertRecursively(42), 42);

  t.is(bst.length, 1);
  t.is(bst.toString(), '42');
});

test('insert recursively two values', (t) => {
  const bst = new BinarySearchTree();

  t.is(bst.insertRecursively(42), 42);
  t.is(bst.insertRecursively(40), 40);

  t.is(bst.length, 2);
  t.is(bst.toString(), '40 42');
});

test('insert recursively three values', (t) => {
  const bst = new BinarySearchTree();

  t.is(bst.insertRecursively(42), 42);
  t.is(bst.insertRecursively(40), 40);
  t.is(bst.insertRecursively(44), 44);

  t.is(bst.length, 3);
  t.is(bst.toString(), '40 42 44');
});

test('insert recursively four values', (t) => {
  const bst = new BinarySearchTree();

  t.is(bst.insertRecursively(42), 42);
  t.is(bst.insertRecursively(40), 40);
  t.is(bst.insertRecursively(44), 44);
  t.is(bst.insertRecursively(41), 41);

  t.is(bst.length, 4);
  t.is(bst.toString(), '40 41 42 44');
});

test('insert recursively five values', (t) => {
  const bst = new BinarySearchTree();

  t.is(bst.insertRecursively(42), 42);
  t.is(bst.insertRecursively(40), 40);
  t.is(bst.insertRecursively(44), 44);
  t.is(bst.insertRecursively(41), 41);
  t.is(bst.insertRecursively(43), 43);

  t.is(bst.length, 5);
  t.is(bst.toString(), '40 41 42 43 44');
});

test('insert recursively six values', (t) => {
  const bst = new BinarySearchTree();

  t.is(bst.insertRecursively(42), 42);
  t.is(bst.insertRecursively(40), 40);
  t.is(bst.insertRecursively(44), 44);
  t.is(bst.insertRecursively(41), 41);
  t.is(bst.insertRecursively(43), 43);
  t.is(bst.insertRecursively(43), 43);

  t.is(bst.length, 5);
  t.is(bst.toString(), '40 41 42 43 44');
});

test('find iteratively the root value', (t) => {
  const bst = new BinarySearchTree(42, 40, 44, 41, 43);

  t.true(bst.findIteratively(42));
});

test('find iteratively the smallest value', (t) => {
  const bst = new BinarySearchTree(42, 40, 44, 41, 43);

  t.true(bst.findIteratively(40));
});

test('find iteratively the largest value', (t) => {
  const bst = new BinarySearchTree(42, 40, 44, 41, 43);

  t.true(bst.findIteratively(44));
});

test('find iteratively the bottem left value', (t) => {
  const bst = new BinarySearchTree(42, 40, 44, 41, 43);

  t.true(bst.findIteratively(41));
});

test('find iteratively the bottom right value', (t) => {
  const bst = new BinarySearchTree(42, 40, 44, 41, 43);

  t.true(bst.findIteratively(43));
});

test('not iteratively find a value in a non-empty tree', (t) => {
  const bst = new BinarySearchTree(42, 40, 44, 41, 43);

  t.false(bst.findIteratively(0));
});

test('not iteratively find a value in an empty tree', (t) => {
  const bst = new BinarySearchTree();

  t.false(bst.findIteratively(0));
});

test('find recursively the root value', (t) => {
  const bst = new BinarySearchTree(42, 40, 44, 41, 43);

  t.true(bst.findRecursively(42));
});

test('find recursively the smallest value', (t) => {
  const bst = new BinarySearchTree(42, 40, 44, 41, 43);

  t.true(bst.findRecursively(40));
});

test('find recursively the largest value', (t) => {
  const bst = new BinarySearchTree(42, 40, 44, 41, 43);

  t.true(bst.findRecursively(44));
});

test('find recursively the bottem left value', (t) => {
  const bst = new BinarySearchTree(42, 40, 44, 41, 43);

  t.true(bst.findRecursively(41));
});

test('find recursively the bottom right value', (t) => {
  const bst = new BinarySearchTree(42, 40, 44, 41, 43);

  t.true(bst.findRecursively(43));
});

test('not recursively find a value in a non-empty tree', (t) => {
  const bst = new BinarySearchTree(42, 40, 44, 41, 43, 43);

  t.false(bst.findRecursively(0));
});

test('not recursively find a value in an empty tree', (t) => {
  const bst = new BinarySearchTree();

  t.false(bst.findRecursively(0));
});

test('is empty tree a binary search tree min/max', (t) => {
  const tree = new BinarySearchTree();

  t.true(tree.isBSTMinMax());
});

test('is non-empty tree a binary search tree min/max', (t) => {
  const tree = new BinarySearchTree(20, 10, 30, 5, 15, 25, 40);

  t.true(tree.isBSTMinMax());
});

test('is tree with invalid left, right node a binary search tree min/max', (t) => {
  const tree = new BinarySearchTree(20, 10, 30, 5, 15, 25, 40);

  tree._root.left.right.key = 25;

  t.false(tree.isBSTMinMax());
});

test('is tree with invalid right, left node a binary search tree min/max', (t) => {
  const tree = new BinarySearchTree(20, 10, 30, 5, 15, 25, 40);

  tree._root.right.left.key = 5;

  t.false(tree.isBSTMinMax());
});

test('is empty tree a binary search tree traversal', (t) => {
  const tree = new BinarySearchTree();

  t.true(tree.isBSTInOrderTraversal());
});

test('is non-empty tree a binary search tree traversal', (t) => {
  const tree = new BinarySearchTree(20, 10, 30, 5, 15, 25, 40);

  t.true(tree.isBSTInOrderTraversal());
});

test('is tree with invalid left, right node a binary search tree traversal', (t) => {
  const tree = new BinarySearchTree(20, 10, 30, 5, 15, 25, 40);

  tree._root.left.right.key = 25;

  t.false(tree.isBSTInOrderTraversal());
});

test('is tree with invalid right, left node a binary search tree traversal', (t) => {
  const tree = new BinarySearchTree(20, 10, 30, 5, 15, 25, 40);

  tree._root.right.left.key = 5;

  t.false(tree.isBSTInOrderTraversal());
});
