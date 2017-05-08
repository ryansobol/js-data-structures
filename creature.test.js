'use strict';

const test = require('ava');
const Creature = require('./creature');
const Weapon = require('./weapon');

test('instantiate with default attributes', (t) => {
  const creature = new Creature();

  t.is(creature.maxHp, 1);
  t.is(creature.curHp, 1);

  t.is(creature.strength, 10);

  t.is(creature.weapon.constructor.name, 'Weapon');
  t.is(creature.weapon.times, 1);
  t.is(creature.weapon.sides, 3);
});

test('instantiate with custom attributes', (t) => {
  const attrs = {
    maxHp: 7,
    curHp: 4,
    strength: 13,
    weapon: new Weapon(1, 6)
  };

  const creature = new Creature(attrs);

  t.is(creature.maxHp, attrs.maxHp);
  t.is(creature.curHp, attrs.curHp);

  t.is(creature.strength, attrs.strength);

  t.is(creature.weapon, attrs.weapon);
});

test('instantiate with custom maxHp but without custom curHp', (t) => {
  const attrs = { maxHp: 7 };
  const creature = new Creature(attrs);

  t.is(creature.maxHp, attrs.maxHp);
  t.is(creature.curHp, attrs.maxHp);
});

test('is not disabled', (t) => {
  const creature = new Creature({ curHp: 1 });

  t.false(creature.isDisabled());
});

test('is disabled', (t) => {
  const creature = new Creature({ curHp: 0 });

  t.true(creature.isDisabled());
});

test('take damage and not become disabled', (t) => {
  const creature = new Creature({ curHp: 5 });

  creature.takeDamage(4);

  t.false(creature.isDisabled());
});

test('take damage and become disabled', (t) => {
  const creature = new Creature({ curHp: 5 });

  creature.takeDamage(5);

  t.true(creature.isDisabled());
});

test('take excessive damage and become disabled', (t) => {
  const creature = new Creature({ curHp: 5 });

  creature.takeDamage(6);

  t.true(creature.isDisabled());
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
