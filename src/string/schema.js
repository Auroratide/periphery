const CommonScenarios = require('../common/scenarios');
const Scenarios = require('./scenarios');

const type = {
  scenarioBuilder: () => [
    CommonScenarios.number(),
    CommonScenarios.boolean(),
    CommonScenarios.object(),
    CommonScenarios.array()
  ],
  validValueTransformer: prev => 's'
};

const lowercase = {
  scenarioBuilder: () => [Scenarios.containsUppercase()],
  validValueTransformer: prev => prev.toLowerCase()
};

const uppercase = {
  scenarioBuilder: () => [Scenarios.containsLowercase()],
  validValueTransformer: prev => prev.toUpperCase()
};

module.exports = function Schema() {
  this._scenarioBuilders = [type.scenarioBuilder];
  this._validValueTransformers = [type.validValueTransformer];

  this.scenarios = () => this._scenarioBuilders.reduce((s, builder) => s.concat(builder()), []);
  this.validValue = () => this._validValueTransformers.reduce((v, transformer) => transformer(v), undefined);

  this.lowercase = () => {
    this._scenarioBuilders.push(lowercase.scenarioBuilder);
    this._validValueTransformers.push(lowercase.validValueTransformer);
    return this;
  };

  this.uppercase = () => {
    this._scenarioBuilders.push(uppercase.scenarioBuilder);
    this._validValueTransformers.push(uppercase.validValueTransformer);
    return this;
  };
};
