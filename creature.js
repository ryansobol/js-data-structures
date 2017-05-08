'use strict';

const dice = require('./dice');
const Weapon = require('./weapon');

class Creature {
  constructor(attrs = {}) {
    /* eslint-disable eqeqeq, no-undefined */
    this.maxHp = attrs.maxHp == undefined ? 1 : attrs.maxHp;
    this.curHp = attrs.curHp == undefined ? this.maxHp : attrs.curHp;

    this.strength = attrs.strength == undefined ? 10 : attrs.strength;
    /* eslint-enable eqeqeq, no-undefined */

    this.weapon = attrs.weapon || new Weapon(1, 3);
  }

  isDisabled() {
    return this.curHp === 0;
  }

  takeDamage(dmg) {
    this.curHp -= dmg;

    if (this.curHp < 0) {
      this.curHp = 0;
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
