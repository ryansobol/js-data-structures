'use strict';

const Item = require('./item');

class Armor extends Item {
  constructor(block = 1, gold = 15) {
    super(gold);

    this.block = block;
  }
}

module.exports = Armor;
