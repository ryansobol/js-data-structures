'use strict';

const test = require('ava');
const dice = require('./dice');

test('roll 1d3', (t) => {
  const roll = dice.roll(1, 3);

  t.true(roll >= 1 && roll <= 3);
});

test('roll 2d3', (t) => {
  const roll = dice.roll(2, 3);

  t.true(roll >= 2 && roll <= 6);
});

test('roll 1d4', (t) => {
  const roll = dice.roll(1, 4);

  t.true(roll >= 1 && roll <= 4);
});

test('roll 2d4', (t) => {
  const roll = dice.roll(2, 4);

  t.true(roll >= 2 && roll <= 8);
});

test('roll 1d6', (t) => {
  const roll = dice.roll(1, 6);

  t.true(roll >= 1 && roll <= 6);
});

test('roll 2d6', (t) => {
  const roll = dice.roll(2, 6);

  t.true(roll >= 2 && roll <= 12);
});

test('roll 1d8', (t) => {
  const roll = dice.roll(1, 8);

  t.true(roll >= 1 && roll <= 8);
});

test('roll 2d8', (t) => {
  const roll = dice.roll(2, 8);

  t.true(roll >= 2 && roll <= 16);
});

test('roll 1d10', (t) => {
  const roll = dice.roll(1, 10);

  t.true(roll >= 1 && roll <= 10);
});

test('roll 2d10', (t) => {
  const roll = dice.roll(2, 10);

  t.true(roll >= 2 && roll <= 20);
});

test('roll 1d20', (t) => {
  const roll = dice.roll(1, 20);

  t.true(roll >= 1 && roll <= 20);
});

test('roll 2d20', (t) => {
  const roll = dice.roll(2, 20);

  t.true(roll >= 2 && roll <= 40);
});
