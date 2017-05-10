'use strict';

const test = require('ava');
const Armor = require('./armor');

test('instantiate', (t) => {
  const armor = new Armor();

  t.is(armor.block, 1);
  t.is(armor.gold, 15);
});

test('instantiate with block value', (t) => {
  const block = 5;
  const armor = new Armor(block);

  t.is(armor.block, block);
  t.is(armor.gold, 15);
});

test('instantiate with block and gold value', (t) => {
  const block = 5;
  const gold = 20;
  const armor = new Armor(block, gold);

  t.is(armor.block, block);
  t.is(armor.gold, gold);
});
