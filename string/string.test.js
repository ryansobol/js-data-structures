'use strict';

const test = require('ava');
const string = require('./string');

test('find first non-repeating character slow', (t) => {
  t.is('a'.findFirstNonRepeatingCharSlow(), 'a');
  t.is('aba'.findFirstNonRepeatingCharSlow(), 'b');
  t.is('abcba'.findFirstNonRepeatingCharSlow(), 'c');
  t.is('abcdcba'.findFirstNonRepeatingCharSlow(), 'd');

  t.is('z'.findFirstNonRepeatingCharSlow(), 'z');
  t.is('zyz'.findFirstNonRepeatingCharSlow(), 'y');
  t.is('zyxyz'.findFirstNonRepeatingCharSlow(), 'x');
  t.is('zyxwxyz'.findFirstNonRepeatingCharSlow(), 'w');

  t.is('aa'.findFirstNonRepeatingCharSlow(), null);
  t.is('abab'.findFirstNonRepeatingCharSlow(), null);
  t.is('abba'.findFirstNonRepeatingCharSlow(), null);
});

test('find first non-repeating character fast', (t) => {
  t.is('a'.findFirstNonRepeatingCharFast(), 'a');
  t.is('aba'.findFirstNonRepeatingCharFast(), 'b');
  t.is('abcba'.findFirstNonRepeatingCharFast(), 'c');
  t.is('abcdcba'.findFirstNonRepeatingCharFast(), 'd');

  t.is('z'.findFirstNonRepeatingCharFast(), 'z');
  t.is('zyz'.findFirstNonRepeatingCharFast(), 'y');
  t.is('zyxyz'.findFirstNonRepeatingCharFast(), 'x');
  t.is('zyxwxyz'.findFirstNonRepeatingCharFast(), 'w');

  t.is('aa'.findFirstNonRepeatingCharFast(), null);
  t.is('abab'.findFirstNonRepeatingCharFast(), null);
  t.is('abba'.findFirstNonRepeatingCharFast(), null);
});

test('is palindrome', (t) => {
  t.true('a'.isPalindrome());
  t.true('aba'.isPalindrome());
  t.true('abcba'.isPalindrome());
  t.true('abcdcba'.isPalindrome());

  t.true('z'.isPalindrome());
  t.true('zyz'.isPalindrome());
  t.true('zyxyz'.isPalindrome());
  t.true('zyxwxyz'.isPalindrome());

  t.true('aa'.isPalindrome());
  // t.true('aaaa'.isPalindrome());
  // t.true('aaaaaa'.isPalindrome());
});
