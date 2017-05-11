'use strict';

class Combat {
  constructor(creature1, creature2) {
    this.creature1 = creature1;
    this.creature2 = creature2;
    this.log = [];
  }

  start() {
    this.log = [];

    const creatures = [this.creature1, this.creature2];

    if (Math.random() < 0.5) {
      creatures.push(creatures.shift());
    }

    this.log.push(`${creatures[0].name} vs ${creatures[1].name}`);

    while (!creatures[0].isFainted() && !creatures[1].isFainted()) {
      this._attack(creatures[0], creatures[1]);

      creatures.push(creatures.shift());
    }

    if (creatures[1].isFainted()) {
      this.log.push(`${creatures[0].name} wins!`);

      return creatures[0];
    }
    else {
      this.log.push(`${creatures[1].name} wins!`);

      return creatures[1];
    }
  }

  _attack(attacker, defender) {
    const hit = attacker.rollHit();

    if (!defender.takeHit(hit)) {
      this.log.push(`${attacker.name} misses ${defender.name}`);

      return;
    }

    const damage = attacker.rollDamage();

    const taken = defender.takeDamage(damage);

    if (taken <= 0) {
      this.log.push(`${attacker.name} hits ${defender.name} but deals no damage`);

      return;
    }

    this.log.push(`${attacker.name} hits ${defender.name} for ${taken} damage`);
  }

  displayLog() {
    for (const line of this.log) {
      console.log(line);
    }
  }
}

module.exports = Combat;
