const schema = require('../common/schema');
const CommonScenarios = require('../common/scenarios');
const Scenarios = require('./scenarios');

const ObjectSchema = schema([
  CommonScenarios.number(),
  CommonScenarios.boolean(),
  CommonScenarios.string(),
  CommonScenarios.array()
], {});

ObjectSchema.prototype.keys = function(obj) {
  const validValues = Object.keys(obj).reduce((o, field) => {
    o[field] = obj[field].validValue()
    return o;
  }, {});

  this._addScenarios(Object.keys(obj).reduce((scenarios, field) =>
    scenarios.concat(obj[field].scenarios().map(fieldScenario =>
      Scenarios.forField(field, fieldScenario, validValues)
    )), []
  ));

  this._setValidValue(validValues);

  return this;
};

module.exports = ObjectSchema;
