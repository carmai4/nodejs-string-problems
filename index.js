const minimist = require('minimist');
const util = require('./util');
const input = minimist(process.argv.slice(2))._;
const command = input[0];
const param = input[1];

switch(command.toLowerCase()) {
  case 'longestsubstr':
    console.log(util.longestSubstringWithoutRepeatingCharacters(param));
    break;

  case 'reduce':
    console.log(util.reduceString(param));
    break;
  case 'backwards':
    console.log(util.backwards(param));
    break;
  case 'generaterandomstring':
    console.log(util.generateRandomString());
    break;
  case 'strongpassword':
    console.log(util.strongPassword(param));
    break;
  default:
    break;
}
