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

const min = {
  scenarioBuilder: limit => () => [Scenarios.shorterThan(limit)],
  validValueTransformer: limit => prev => prev.length < limit ? prev + prev[0].repeat(limit - prev.length) : prev
};

const max = {
  scenarioBuilder: limit => () => [Scenarios.longerThan(limit)],
  validValueTransformer: limit => prev => prev.length > limit ? prev.substr(0, limit) : prev
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

  this.min = limit => {
    this._scenarioBuilders.push(min.scenarioBuilder(limit));
    this._validValueTransformers.push(min.validValueTransformer(limit));
    return this;
  };

  this.max = limit => {
    this._scenarioBuilders.push(max.scenarioBuilder(limit));
    this._validValueTransformers.push(max.validValueTransformer(limit));
    return this;
  };
};
