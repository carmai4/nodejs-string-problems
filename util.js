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
  generateRandomString
};
