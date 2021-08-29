const minimist = require('minimist');
const util = require('./util');
const input = minimist(process.argv.slice(2))._;
const command = input[0].toLowerCase();
const param = input[1];
console.log('input', input);

if (command.startsWith('longest')) console.log(util.longestSubstringWithoutRepeatingCharacters(param));
if (command.startsWith('reduce')) console.log(util.reduceString(param));
if (command.startsWith('backwards')) console.log(util.backwards(param));
if (command.startsWith('generaterandom')) console.log(util.generateRandomString());
if (command.startsWith('strong')) console.log(util.strongPassword(param));
