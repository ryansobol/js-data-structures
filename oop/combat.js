'use strict';

class Combat {
  constructor(creature1, creature2) {
    this.creature1 = creature1;
    this.creature2 = creature2;
    this.log = [];
  }

  _initiate() {
    if (Math.random() < 0.5) {
      return [this.creature1, this.creature2];
    }

    return [this.creature2, this.creature1];
  }

  _attack(attacker, defender) {
    const hit = attacker.rollHit();

    if (!defender.takeHit(hit)) {
      return `${attacker.name} misses ${defender.name}`;
    }

    const damage = attacker.rollDamage();

    const taken = defender.takeDamage(damage);

    if (taken <= 0) {
      return `${attacker.name} hits ${defender.name} but deals no damage`;
    }

    return `${attacker.name} hits ${defender.name} for ${taken} damage`;
  }

  _loot(winner, loser) {
    const gold = loser.gold;

    loser.gold = 0;
    winner.gold += gold;

    return `${winner.name} wins ${gold} gold`;
  }

  start() {
    this.log = [];

    let [attacker, defender] = this._initiate();

    this.log.push(`${attacker.name} vs ${defender.name}`);

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const attackResult = this._attack(attacker, defender);

      this.log.push(attackResult);

      if (defender.isFainted()) {
        this.log.push(`${attacker.name} defeats ${defender.name}`);

        break;
      }

      // eslint-disable-next-line newline-after-var
      const temp = attacker;
      attacker = defender;
      defender = temp;
    }

    const lootResult = this._loot(attacker, defender);

    this.log.push(lootResult);

    return attacker;
  }

  displayLog() {
    for (const line of this.log) {
      console.log(line);
    }
  }
}

module.exports = Combat;
