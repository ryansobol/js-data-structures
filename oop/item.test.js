'use strict';

const test = require('ava');
const Item = require('./item');

test('instantiate', (t) => {
  const item = new Item();

  t.is(item.gold, 1);
});

test('instantiate with custom gold value', (t) => {
  const item = new Item(10);

  t.is(item.gold, 10);
});
