const CONSTANTS = require('./constants');

/**
 * returns minimum number of characters to be added to make a strong password
 * that contains at least one uppercase letter, one lowercase letter, one special character, one number
 * @param {string} s password to be evaluated
 * @param {number} length defaults to 6
 */
function strongPassword(s, length = 6) {
  const diff = length - s.length;
  const checks = [
    hasCharacter(s, CONSTANTS.numbers),
    hasCharacter(s, CONSTANTS.special),
    hasCharacter(s, CONSTANTS.lowercase),
    hasCharacter(s, CONSTANTS.uppercase)
  ];

  const num = checks.reduce((acc, curr) => {
    return curr ? acc : acc + 1;
  }, 0);

  return Math.max(diff, num);
}

/**
 * returns true if string contains one of chars
 * @param {string} s
 * @param {string} chars
 */
function hasCharacter(s, chars) {
  let found = false;
  for (let i = 0; i < s.length; i++) {
    if (!found) {
      found = chars.indexOf(s[i]) > -1;
    }
  }
  return found;
}

/**
 * returns string reduced by eliminating pairs of same character
 * example: 'aab' -> 'b', 'aaa' -> 'a', 'aabbc' -> 'c'
 * @param {string} s
 */
function reduceString(s) {
  let result = '';
  let skip = false;
  let curr, next;

  for (let i = 0; i < s.length; i++) {
    curr = s[i];
    next = i < s.length - 1 ? s[i + 1] : undefined;

    if (!skip) {
      if (curr === next) {
        skip = true;
      } else {
        skip = false;
        result += curr;
      }
    } else {
      skip = false;
    }
  }

  if (result.length === s.length) {
    return result;
  } else {
    return reduceString(result);
  }
}

/**
 * returns str reversed
 * @param {string} str
 */
function backwards(str) {
  if (!str) {
    return undefined;
  }

  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str.charAt(i);
  }
  return result;
}

/**
 * returns true if two strings are same
 * @param {string} str1
 * @param {string} str2 
 */
function stringsAreSame(str1, str2) {
  if (typeof(str1) !== 'string') {
    return false;
  }
  if (typeof(str2) !== 'string') {
    return false;
  }
  return str1 === str2;
}

/**
 * returns randomly generated string of specified length or random length
 * @param {number} length
 */
function generateRandomString(length) {
  let result = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const len = length || Math.floor(Math.random() * 999) + 1;

  for (let i = 0; i < len; i++) {
    const r = Math.floor(Math.random() * (chars.length - 1));
    result += chars[r];
  }
  return result;
};

module.exports = {
  reduceString,
  backwards,
  stringsAreSame,
  generateRandomString,
  hasCharacter,
  strongPassword
};
