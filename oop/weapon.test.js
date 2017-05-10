'use strict';

const test = require('ava');
const Weapon = require('./weapon');

test('instantiate', (t) => {
  const times = 1;
  const sides = 3;
  const weapon = new Weapon(times, sides);

  t.is(weapon.times, times);
  t.is(weapon.sides, sides);
  t.is(weapon.gold, 5);
});

test('instantiate with gold value', (t) => {
  const times = 1;
  const sides = 3;
  const gold = 10;
  const weapon = new Weapon(times, sides, gold);

  t.is(weapon.times, times);
  t.is(weapon.sides, sides);
  t.is(weapon.gold, gold);
});

test('roll block 1d3', (t) => {
  const weapon = new Weapon(1, 3);

  const roll = weapon.rollSwing();

  t.true(roll >= 1 && roll <= 3);
});

test('roll block 2d6', (t) => {
  const weapon = new Weapon(2, 6);

  const roll = weapon.rollSwing();

  t.true(roll >= 2 && roll <= 12);
});

test('roll block 0d20', (t) => {
  const weapon = new Weapon(0, 20);

  const roll = weapon.rollSwing();

  t.is(roll, 0);
});
