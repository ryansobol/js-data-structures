'use strict';

class Combat {
  constructor(creature1, creature2) {
    this.creature1 = creature1;
    this.creature2 = creature2;
    this.log = [];
  }

  start() {
    this.log = [];

    let attacker, defender;

    if (Math.random() < 0.5) {
      attacker = this.creature1;
      defender = this.creature2;
    }
    else {
      attacker = this.creature2;
      defender = this.creature1;
    }

    this.log.push(`${attacker.name} vs ${defender.name}`);

    while (!attacker.isFainted() && !defender.isFainted()) {
      const hit = attacker.rollHit();

      if (!defender.takeHit(hit)) {
        this.log.push(`${attacker.name} misses ${defender.name}`);
      }

      const damage = attacker.rollDamage();

      const taken = defender.takeDamage(damage);

      if (taken <= 0) {
        this.log.push(`${attacker.name} hits ${defender.name} but deals no damage`);
      }
      else {
        this.log.push(`${attacker.name} hits ${defender.name} for ${taken} damage`);
      }

      const temp = attacker;

      attacker = defender;
      defender = temp;
    }

    if (defender.isFainted()) {
      this.log.push(`${attacker.name} wins!`);

      return attacker;
    }
    else {
      this.log.push(`${defender.name} wins!`);

      return defender;
    }
  }

  displayLog() {
    for (const line of this.log) {
      console.log(line);
    }
  }
}

module.exports = Combat;
