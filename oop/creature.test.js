'use strict';

const test = require('ava');
const Armor = require('./armor');
const Creature = require('./creature');
const Weapon = require('./weapon');

test('instantiate with default attributes', (t) => {
  const creature = new Creature();

  t.is(creature.armor, null);
  t.is(creature.dodge, 0);
  t.is(creature.gold, 0);
  t.is(creature.health, 1);
  t.is(creature.name, 'Boar');
  t.is(creature.weapon, null);
});

test('instantiate with custom attributes', (t) => {
  const attrs = {
    armor: new Armor(1),
    dodge: 2,
    gold: 10,
    health: 4,
    name: 'Knight',
    weapon: new Weapon(1, 6)
  };

  const creature = new Creature(attrs);

  t.is(creature.armor, attrs.armor);
  t.is(creature.dodge, attrs.dodge);
  t.is(creature.gold, attrs.gold);
  t.is(creature.health, attrs.health);
  t.is(creature.name, attrs.name);
  t.is(creature.weapon, attrs.weapon);
});

test('is not fainted', (t) => {
  const creature = new Creature({ health: 2 });

  t.false(creature.isFainted());
});

test('is fainted', (t) => {
  const creature = new Creature({ health: 1 });

  t.true(creature.isFainted());
});

test('take hit', (t) => {
  const creature = new Creature({ dodge: 2 });

  t.true(creature.takeHit(3));
});

test('not take hit', (t) => {
  const creature = new Creature({ dodge: 2 });

  t.false(creature.takeHit(2));
});

test('take damage and not become fainted', (t) => {
  const creature = new Creature({ health: 5 });

  const taken = creature.takeDamage(3);

  t.is(taken, 3);
  t.is(creature.health, 2);
  t.false(creature.isFainted());
});

test('take damage and become fainted', (t) => {
  const creature = new Creature({ health: 5 });

  const taken = creature.takeDamage(4);

  t.is(taken, 4);
  t.is(creature.health, 1);
  t.true(creature.isFainted());
});

test('take excessive damage and become fainted', (t) => {
  const creature = new Creature({ health: 5 });

  const taken = creature.takeDamage(5);

  t.is(taken, 5);
  t.is(creature.health, 1);
  t.true(creature.isFainted());
});

test('take excessive damage, block some and not become fainted', (t) => {
  const creature = new Creature({ health: 5, armor: new Armor(2) });

  const taken = creature.takeDamage(5);

  t.is(taken, 3);
  t.is(creature.health, 2);
  t.false(creature.isFainted());
});

test('take excessive damage, block some and become fainted', (t) => {
  const creature = new Creature({ health: 5, armor: new Armor(1) });

  const taken = creature.takeDamage(5);

  t.is(taken, 4);
  t.is(creature.health, 1);
  t.true(creature.isFainted());
});

test('take excessive damage, block all and not become fainted', (t) => {
  const creature = new Creature({ health: 5, armor: new Armor(5) });

  const taken = creature.takeDamage(5);

  t.is(taken, 0);
  t.is(creature.health, 5);
  t.false(creature.isFainted());
});

test('take excessive damage, block more and not become fainted', (t) => {
  const creature = new Creature({ health: 5, armor: new Armor(6) });

  const taken = creature.takeDamage(5);

  t.is(taken, -1);
  t.is(creature.health, 5);
  t.false(creature.isFainted());
});

test('roll hit', (t) => {
  const creature = new Creature();

  const roll = creature.rollHit();

  t.true(roll >= 1 && roll <= 20);
});

test('roll damage', (t) => {
  const creature = new Creature();

  const roll = creature.rollDamage();

  t.is(roll, 0);
});

test('roll damage with weapon', (t) => {
  const creature = new Creature({ weapon: new Weapon(1, 6) });

  const roll = creature.rollDamage();

  t.true(roll >= 1 && roll <= 6);
});

test('sell armor', (t) => {
  const gold = 0;
  const armor = new Armor(1, 20);
  const creature = new Creature({ gold, armor });

  t.is(creature.gold, gold);

  const actual = creature.sellArmor();

  t.is(actual, armor);
  t.is(creature.gold, gold + armor.gold);
});

test('sell non-existing armor', (t) => {
  const gold = 0;
  const creature = new Creature({ gold });

  t.is(creature.gold, gold);

  const actual = creature.sellArmor();

  t.is(actual, null);
  t.is(creature.gold, gold);
});

test('buy affordable armor', (t) => {
  const gold = 20;
  const armor = new Armor(1, 20);
  const creature = new Creature({ gold });

  t.is(creature.gold, gold);

  const actual = creature.buyArmor(armor);

  t.is(actual, armor);
  t.is(creature.gold, gold - armor.gold);
});

test('buy unaffordable armor', (t) => {
  const gold = 20;
  const armor = new Armor(1, 21);
  const creature = new Creature({ gold });

  t.is(creature.gold, gold);

  const actual = creature.buyArmor(armor);

  t.is(actual, null);
  t.is(creature.gold, gold);
});
