'use strict';

const Armor = require('./armor');
const Combat = require('./combat');
const Creature = require('./creature');
const Weapon = require('./weapon');

const dragon = new Creature({
  armor: new Armor(6),
  dodge: 1,
  gold: 100,
  health: 90,
  name: 'Dragon',
  weapon: new Weapon(1, 8)
});

const knight = new Creature({
  armor: new Armor(2),
  dodge: 5,
  gold: 0,
  health: 40,
  name: 'Knight',
  weapon: new Weapon(3, 6)
});

const combat = new Combat(dragon, knight);

combat.start();

combat.displayLog();
