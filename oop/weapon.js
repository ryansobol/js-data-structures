'use strict';

const dice = require('./dice');
const Item = require('./item');

class Weapon extends Item {
  constructor(times, sides, gold = 5) {
    super(gold);

    this.times = times;
    this.sides = sides;
  }

  rollSwing() {
    return dice.roll(this.times, this.sides);
  }
}

module.exports = Weapon;
