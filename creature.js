'use strict';

const dice = require('./dice');
const Weapon = require('./weapon');

class Creature {
  constructor(attrs = {}) {
    /* eslint-disable eqeqeq, no-undefined */
    this.maxHp = attrs.maxHp == undefined ? 1 : attrs.maxHp;
    this.curHp = attrs.curHp == undefined ? this.maxHp : attrs.curHp;

    this.str = attrs.str == undefined ? 10 : attrs.str;
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
    const strModifier = Math.floor((this.str - 10) / 2);

    return this.weapon.rollSwing() + strModifier;
  }
}

module.exports = Creature;
