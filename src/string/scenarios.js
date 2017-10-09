const { scenario } = require('../common/scenarios');

module.exports.containsUppercase = () => scenario('contains uppercase characters', 'UPPERCASE');
module.exports.containsLowercase = () => scenario('contains lowercase characters', 'lowercase');

module.exports.longerThan = limit => scenario(`contains more than ${limit} characters`, 's'.repeat(limit + 1));
module.exports.shorterThan = limit => scenario(`contains less than ${limit} characters`, 's'.repeat(limit - 1));

module.exports.empty = () => scenario('is empty string', '');
module.exports.alphanumeric = () => scenario('is alphanumeric', 'Word5');

module.exports.dayMonthYear = () => scenario('is a date in DD-MM-YYYY format', '21-12-2017');

module.exports.isoInvalidMonths = () => [
    scenario('is an ISO date with a month before January', '2017-00'),
    scenario('is an ISO date with a month after December', '2017-13')
];