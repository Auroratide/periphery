const Scenario = require('../../scenario');

const type = () => [
  Scenario.number(),
  Scenario.boolean(),
  Scenario.object(),
  Scenario.array()
];

const scenarios = () => type();

module.exports = () => {
  return {
    scenarios,
    validValue: () => 'str'
  };
};
