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

module.exports.isoInvalidDays = () => [
    scenario('is an ISO date with a day before 01', '2017-12-00'),
    scenario('is an ISO date with a day after 31', '2017-01-32'),
    scenario('is an ISO date with a day after 30 on a month with 30 days', '2017-04-31'),
    scenario('is an ISO date with a day after 28 in February', '2017-02-29')
];

module.exports.isoInvalidTimes = () => [
    scenario('is an ISO date with an hour beyond 24 hours', '2017-01-01T24:00Z'),
    scenario('is an ISO date with a minute beyond 60 minutes', '2017-01-01T00:60Z'),
    scenario('is an ISO date with a second beyond 60 seconds', '2017-01-01T00:00:60Z')
];

module.exports.isoInvalidTimeZones = () => [
    scenario('is an ISO date with time zone hour offset beyond 24 hours', '2017-01-01T00:00:00+24:00'),
    scenario('is an ISO date with time zone minute offset 60 minutes', '2017-01-01T00:00:00+00:60')
];