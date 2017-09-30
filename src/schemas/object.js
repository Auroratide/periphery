const scenario = require('../scenarios');

const type = () => [
  scenario.number(),
  scenario.boolean(),
  scenario.string(),
  scenario.array()
];

const nested = obj => Object.keys(obj).reduce((scenarios, field) =>
  scenarios.concat(
    obj[field].scenarios().map(s =>
      scenario(s.name.replace('$field', field), Object.keys(obj).reduce((newScenario, key) => {
        if(field === key)
          newScenario[key] = s.data;
        else
          newScenario[key] = obj[key].validValue();
        return newScenario;
      }, {}))
    )
  ), []
);

module.exports = obj => {
  return {
    scenarios: () => type().concat(nested(obj))
  };
};
