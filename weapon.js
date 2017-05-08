'use strict';

const dice = require('./dice');

class Weapon {
  constructor(attrs = {}) {
    this.times = attrs.times || 1;
    this.sides = attrs.sides || 3;
  }

  rollSwing() {
    return dice.roll(this.times, this.sides);
  }
}

module.exports = Weapon;
