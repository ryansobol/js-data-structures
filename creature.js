'use strict';

const dice = require('./dice');
const Weapon = require('./weapon');

class Creature {
  constructor(attrs = {}) {
    this.health = attrs.health || 1;
    this.strength = attrs.strength || 10;
    this.weapon = attrs.weapon || new Weapon(1, 3);
  }

  isFeinted() {
    return this.health === 1;
  }

  takeDamage(damage) {
    this.health -= damage;

    if (this.health < 1) {
      this.health = 1;
    }
  }

  rollAttack() {
    return dice.roll(1, 20);
  }

  rollDamage() {
    const strengthModifier = Math.floor((this.strength - 10) / 2);

    return this.weapon.rollSwing() + strengthModifier;
  }
}

module.exports = Creature;
