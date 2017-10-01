const { scenario } = require('../common/scenarios');

module.exports.containsUppercase = () => scenario('contains uppercase characters', 'UpperCase');
module.exports.containsLowercase = () => scenario('contains lowercase characters', 'LowerCase');

module.exports.longerThan = limit => scenario(`contains more than ${limit} characters`, 's'.repeat(limit + 1));
module.exports.shorterThan = limit => scenario(`contains less than ${limit} characters`, 's'.repeat(limit - 1));
