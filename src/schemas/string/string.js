const Scenarios = require('../../scenarios');

const type = () => [
  Scenarios.number(),
  Scenarios.boolean(),
  Scenarios.object(),
  Scenarios.array()
];

const scenarios = () => type();

module.exports = () => {
  return {
    scenarios,
    validValue: () => 'str'
  };
};
