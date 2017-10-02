const { scenario } = require('../common/scenarios');

module.exports.forField = (field, fieldScenario, validValues) => {
  const data = Object.assign({}, validValues);
  data[field] = fieldScenario.data;

  return scenario(field + ' ' + fieldScenario.name, data);
};
