"use strict";
const {
  reduceString,
  backwards,
  stringsAreSame,
  generateRandomString,
  strongPassword,
  hasCharacter,
  longestSubstringWithoutRepeatingCharacters
} = require('./util');
const CONSTANTS = require('./constants');

test('reduceString returns as expected', () => {
  expect(reduceString('baa')).toBe('b');
  expect(reduceString('aaabbc')).toBe('ac');
  expect(reduceString('baab')).toBe('');
  expect(reduceString('aaabccddd')).toBe('abd');
  expect(reduceString('bmekkslexxkweefffslzz')).toBe('bmeslekwfsl');
});

test('backwards returns as expected', () => {
  expect(backwards('bbb')).toBe('bbb');
  expect(backwards('asdfgh')).toBe('hgfdsa');
  expect(backwards('aekglksxkd')).toBe('dkxsklgkea');
  expect(backwards('qwerty')).toBe('ytrewq');
  
  const test1 = generateRandomString(10);
  const expected1 = test1.split('').reverse().join('');
  expect(backwards(test1)).toBe(expected1);
});

test('stringsAreSame returns as expected', () => {
  expect(stringsAreSame('a', 'a')).toBe(true);
  expect(stringsAreSame('asdf', 'a')).toBe(false);
  expect(stringsAreSame('qwer', 'ty')).toBe(false);
  
  const test1 = generateRandomString(5);
  const test1b = `${test1}b`;
  const test2 = generateRandomString(20);
  const test2b = `${test2}b`;
  const test3 = generateRandomString(30);
  const test4 = generateRandomString();
  expect(stringsAreSame(test1, test1)).toBe(true);
  expect(stringsAreSame(test1, test1b)).toBe(false);
  expect(stringsAreSame(test2, test2)).toBe(true);
  expect(stringsAreSame(test2, test2b)).toBe(false);
  expect(stringsAreSame(test3, test2)).toBe(false);
  expect(stringsAreSame(test3, test3)).toBe(true);
  expect(stringsAreSame(test3, 'abc')).toBe(false);
  expect(stringsAreSame(test4, test4)).toBe(true);
});

test('generateRandomString returns as expected', () => {
  const result1 = generateRandomString();
  const result2 = generateRandomString(10);
  const result3 = generateRandomString(20);
  const rand = Math.floor(Math.random() * 123) + 1;
  const result4 = generateRandomString(rand);

  expect(result1.length).toBeGreaterThan(0);
  expect(result1.length).toBeLessThan(999);
  expect(result2.length).toBe(10);
  expect(result3.length).toBe(20);
  expect(result4.length).toBe(rand);
});

// TODO
test('hasCharacter returns as expected', () => {
  const str1 = 'abc';
  const str2 = 'zzz';
  const str3 = 'abckoisdjflskwl';
  expect(hasCharacter(str1, CONSTANTS.lowercase)).toBe(true);
  expect(hasCharacter(str2, CONSTANTS.lowercase)).toBe(true);
  expect(hasCharacter(str3, 'qqqq')).toBe(false);
  expect(hasCharacter(str3, 'qqqw')).toBe(true);
});

test('strongPassword returns as expected', () => {
  const str1 = 'aSdfghj@';
  const str2 = 'onlylowercaseletters';
  const str3 = 'onlyLetteRs';
  const str4 = '1@aA';
  expect(strongPassword(str1)).toBe(1);
  expect(strongPassword(str2)).toBe(3);
  expect(strongPassword(str3)).toBe(2);
  expect(strongPassword(str4)).toBe(2);
  expect(strongPassword(str4, 12)).toBe(8);
});

test('longestSubstringWithoutRepeatingCharacters returns as expected', () => {
  const str1 = 'pwwkew';
  const str2 = 'a';
  const str3 = 'abcc';
  const str4 = 'z3kkds';
  const str5 = 'woeidjkxhhhcfdj4884jhejjksjhmmwjdjkjehwwkejw';
  expect(longestSubstringWithoutRepeatingCharacters(str1)).toBe(3);
  expect(longestSubstringWithoutRepeatingCharacters(str2)).toBe(1);
  expect(longestSubstringWithoutRepeatingCharacters(str3)).toBe(3);
  expect(longestSubstringWithoutRepeatingCharacters(str4)).toBe(3);
  expect(longestSubstringWithoutRepeatingCharacters(str5)).toBe(9);
});
