'use strict';

module.exports = {
  roll(times, sides) {
    let total = 0;

    for (let i = 0; i < times; i++) {
      total += Math.ceil(Math.random() * sides);
    }

    return total;
  }
};
