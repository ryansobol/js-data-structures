'use strict';

const test = require('ava');
const Weapon = require('./weapon');

test('instantiate with default attributes', (t) => {
  const weapon = new Weapon();

  t.is(weapon.times, 1);
  t.is(weapon.sides, 3);
});

test('instantiate with custom attributes', (t) => {
  const attrs = { times: 2, sides: 6 };
  const weapon = new Weapon(attrs);

  t.is(weapon.times, attrs.times);
  t.is(weapon.sides, attrs.sides);
});

test('roll swing', (t) => {
  const weapon = new Weapon();

  const roll = weapon.rollSwing();

  t.true(roll >= 1 && roll <= 3);
});
