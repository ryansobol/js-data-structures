/* eslint-disable no-new, no-undefined */
'use strict';

const test = require('ava');
const Memory = require('./staticArrayMemory');

test('instantiate with valid length', (t) => {
  const memory = new Memory(1);

  t.is(memory.length, 1);
  t.is(memory.word, 64);
  t.true(memory.head >= 0);
  t.true(memory.head <= 320000);
  t.is(memory.head % memory.word, 0);
});

test('instantiate with invalid length', (t) => {
  const error = t.throws(() => {
    new Memory(0);
  }, RangeError);

  t.is(error.message, 'invalid length 0');
});

test('get value from valid address', (t) => {
  const memory = new Memory(1);
  const address = memory.head;

  t.is(memory.get(address), undefined);
});

test('get value from invalid address', (t) => {
  const memory = new Memory(1);
  const address = memory.head - memory.word;

  const error = t.throws(() => {
    memory.get(address);
  }, RangeError);

  t.is(error.message, `invalid address ${address}`);
});

test('set value to valid address', (t) => {
  const memory = new Memory(1);
  const address = memory.head;

  t.is(memory.set(address, 42), 42);
  t.is(memory.get(address), 42);
});

test('set value to invalid address', (t) => {
  const memory = new Memory(1);
  const address = memory.head - memory.word;

  const error = t.throws(() => {
    memory.set(address, 42);
  }, RangeError);

  t.is(error.message, `invalid address ${address}`);
});
