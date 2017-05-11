'use strict';

const test = require('ava');
const Combat = require('./combat');
const Creature = require('./creature');

test('instantiate', (t) => {
  const creature1 = new Creature({ name: 'Creature 1' });
  const creature2 = new Creature({ name: 'Creature 2' });
  const combat = new Combat(creature1, creature2);

  t.is(combat.creature1, creature1);
  t.is(combat.creature2, creature2);
  t.deepEqual(combat.log, []);
});

test('start with creature1 advantage', (t) => {
  const creature1 = new Creature({ name: 'Creature 1', health: 1000 });
  const creature2 = new Creature({ name: 'Creature 2' });
  const combat = new Combat(creature1, creature2);

  const winner = combat.start();

  t.is(winner, creature1);
  t.true(combat.log.length > 0);
});

test('start with creature1 advantage', (t) => {
  const creature1 = new Creature({ name: 'Creature 1' });
  const creature2 = new Creature({ name: 'Creature 2', health: 1000 });
  const combat = new Combat(creature1, creature2);

  const winner = combat.start();

  t.is(winner, creature2);
  t.true(combat.log.length > 0);
});
