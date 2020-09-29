"use strict";
const { reduceString, backwards, stringsAreSame, generateRandomString } = require('./util');

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
