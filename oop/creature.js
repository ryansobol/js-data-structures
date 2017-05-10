'use strict';

class Creature {
  constructor(attrs = {}) {
    this.armor = attrs.armor || null;
    this.gold = attrs.gold || 0;
    this.health = attrs.health || 1;
    this.weapon = attrs.weapon || null;
  }

  isFeinted() {
    return this.health === 1;
  }

  takeDamage(damage) {
    let blockedDamage = damage;

    if (this.armor) {
      blockedDamage -= this.armor.block;
    }

    if (blockedDamage > 0) {
      this.health -= blockedDamage;
    }

    if (this.health < 1) {
      this.health = 1;
    }
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
