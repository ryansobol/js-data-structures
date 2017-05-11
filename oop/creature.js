'use strict';

const dice = require('./dice');

class Creature {
  constructor(attrs = {}) {
    this.armor = attrs.armor || null;
    this.dodge = attrs.dodge || 0;
    this.gold = attrs.gold || 0;
    this.health = attrs.health || 1;
    this.weapon = attrs.weapon || null;
  }

  isFeinted() {
    return this.health === 1;
  }

  takeHit(hit) {
    return this.dodge < hit;
  }

  takeDamage(damage) {
    let unblocked = damage;

    if (this.armor) {
      unblocked -= this.armor.block;
    }

    if (unblocked > 0) {
      this.health -= unblocked;
    }

    if (this.health < 1) {
      this.health = 1;
    }
  }

  rollHit() {
    return dice.roll(1, 20);
  }

  rollDamage() {
    let damage = 0;

    if (this.weapon) {
      damage += this.weapon.rollSwing();
    }

    return damage;
  }

  sellArmor() {
    if (!this.armor) {
      return null;
    }

    this.gold += this.armor.gold;

    const armor = this.armor;

    this.armor = null;

    return armor;
  }

  buyArmor(armor) {
    if (armor.gold > this.gold) {
      return null;
    }

    this.gold -= armor.gold;

    this.armor = armor;

    return armor;
  }
}

module.exports = Creature;
