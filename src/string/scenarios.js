const { scenario } = require('../common/scenarios');

module.exports.containsUppercase = () => scenario('contains uppercase characters', 'UpperCase');
module.exports.containsLowercase = () => scenario('contains lowercase characters', 'LowerCase');
