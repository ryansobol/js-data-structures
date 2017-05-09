'use strict';

const test = require('ava');
const Creature = require('./creature');
const Weapon = require('./weapon');

test('instantiate with default attributes', (t) => {
  const creature = new Creature();

  t.is(creature.health, 1);
  t.is(creature.strength, 10);

  t.is(creature.weapon.constructor.name, 'Weapon');
  t.is(creature.weapon.times, 1);
  t.is(creature.weapon.sides, 3);
});

test('instantiate with custom attributes', (t) => {
  const attrs = {
    health: 4,
    strength: 13,
    weapon: new Weapon(1, 6)
  };

  const creature = new Creature(attrs);

  t.is(creature.health, attrs.health);
  t.is(creature.strength, attrs.strength);
  t.is(creature.weapon, attrs.weapon);
});

test('is not feinted', (t) => {
  const creature = new Creature({ health: 2 });

  t.false(creature.isFeinted());
});

test('is feinted', (t) => {
  const creature = new Creature({ health: 1 });

  t.true(creature.isFeinted());
});

test('take damage and not become feinted', (t) => {
  const creature = new Creature({ health: 5 });

  creature.takeDamage(3);

  t.is(creature.health, 2);
  t.false(creature.isFeinted());
});

test('take damage and become feinted', (t) => {
  const creature = new Creature({ health: 5 });

  creature.takeDamage(4);

  t.is(creature.health, 1);
  t.true(creature.isFeinted());
});

test('take excessive damage and become feinted', (t) => {
  const creature = new Creature({ health: 5 });

  creature.takeDamage(5);

  t.is(creature.health, 1);
  t.true(creature.isFeinted());
});

test('roll attack', (t) => {
  const creature = new Creature();

  const roll = creature.rollAttack();

  t.true(roll >= 1 && roll <= 20);
});

test('roll damage', (t) => {
  const creature = new Creature({ strength: 12, weapon: new Weapon(1, 6) });

  const roll = creature.rollDamage();

  t.true(roll >= 2 && roll <= 7);
});
