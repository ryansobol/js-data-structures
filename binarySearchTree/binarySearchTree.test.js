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

// eslint-disable-next-line max-statements
test('lowest common ancesters', (t) => {
  const bst = new BinarySearchTree(
    44, 40, 48, 38, 42, 46, 50, 37, 39, 41, 43, 45, 47, 49, 51
  );

  //               44
  //       40               48
  //   38      42       46      50
  // 37  39  41  43  45   47  49  51

  t.is(bst.lowestCommonAncestor(40, 48), 44);
  t.is(bst.lowestCommonAncestor(38, 42), 40);
  t.is(bst.lowestCommonAncestor(46, 50), 48);
  t.is(bst.lowestCommonAncestor(37, 39), 38);
  t.is(bst.lowestCommonAncestor(41, 43), 42);
  t.is(bst.lowestCommonAncestor(45, 47), 46);
  t.is(bst.lowestCommonAncestor(49, 51), 50);
  t.is(bst.lowestCommonAncestor(37, 41), 40);
  t.is(bst.lowestCommonAncestor(37, 43), 40);
  t.is(bst.lowestCommonAncestor(37, 45), 44);
  t.is(bst.lowestCommonAncestor(37, 47), 44);
  t.is(bst.lowestCommonAncestor(37, 49), 44);
  t.is(bst.lowestCommonAncestor(37, 51), 44);
  t.is(bst.lowestCommonAncestor(39, 41), 40);
  t.is(bst.lowestCommonAncestor(39, 43), 40);
  t.is(bst.lowestCommonAncestor(39, 43), 40);
  t.is(bst.lowestCommonAncestor(39, 45), 44);
  t.is(bst.lowestCommonAncestor(39, 47), 44);
  t.is(bst.lowestCommonAncestor(39, 49), 44);
  t.is(bst.lowestCommonAncestor(39, 51), 44);

  t.is(bst.lowestCommonAncestor(37, 44), 44);
  t.is(bst.lowestCommonAncestor(38, 44), 44);
  t.is(bst.lowestCommonAncestor(39, 44), 44);
  t.is(bst.lowestCommonAncestor(40, 44), 44);
  t.is(bst.lowestCommonAncestor(41, 44), 44);
  t.is(bst.lowestCommonAncestor(42, 44), 44);
  t.is(bst.lowestCommonAncestor(43, 44), 44);
  t.is(bst.lowestCommonAncestor(44, 44), 44);
  t.is(bst.lowestCommonAncestor(44, 45), 44);
  t.is(bst.lowestCommonAncestor(44, 46), 44);
  t.is(bst.lowestCommonAncestor(44, 47), 44);
  t.is(bst.lowestCommonAncestor(44, 48), 44);
  t.is(bst.lowestCommonAncestor(44, 49), 44);
  t.is(bst.lowestCommonAncestor(44, 50), 44);
  t.is(bst.lowestCommonAncestor(44, 41), 44);

  t.is(bst.lowestCommonAncestor(1, 37), 37);
  t.is(bst.lowestCommonAncestor(1, 38), 38);
  t.is(bst.lowestCommonAncestor(1, 39), 39);
  t.is(bst.lowestCommonAncestor(1, 40), 40);
  t.is(bst.lowestCommonAncestor(1, 41), 41);
  t.is(bst.lowestCommonAncestor(1, 42), 42);
  t.is(bst.lowestCommonAncestor(1, 43), 43);
  t.is(bst.lowestCommonAncestor(1, 44), 44);

  t.is(bst.lowestCommonAncestor(44, 100), 44);
  t.is(bst.lowestCommonAncestor(45, 100), 45);
  t.is(bst.lowestCommonAncestor(46, 100), 46);
  t.is(bst.lowestCommonAncestor(47, 100), 47);
  t.is(bst.lowestCommonAncestor(48, 100), 48);
  t.is(bst.lowestCommonAncestor(49, 100), 49);
  t.is(bst.lowestCommonAncestor(50, 100), 50);
  t.is(bst.lowestCommonAncestor(51, 100), 51);

  t.is(bst.lowestCommonAncestor(1, 100), null);
});
