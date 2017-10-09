const schema = require('../common/schema');
const CommonScenarios = require('../common/scenarios');
const Scenarios = require('./scenarios');

const StringSchema = schema([
  CommonScenarios.number(),
  CommonScenarios.boolean(),
  CommonScenarios.object(),
  CommonScenarios.array()
], 's');

StringSchema.prototype.lowercase = function() {
  this._addScenario(Scenarios.containsUppercase());
  this._setValidValue(this._validValue.toLowerCase());
  return this;
};

StringSchema.prototype.uppercase = function() {
  this._addScenario(Scenarios.containsLowercase());
  this._setValidValue(this._validValue.toUpperCase());
  return this;
};

StringSchema.prototype.min = function(limit) {
  this._addScenario(Scenarios.shorterThan(limit));
  const v = this._validValue;
  this._setValidValue(v.length < limit ? v + v[0].repeat(limit - v.length) : v);
  return this;
};

StringSchema.prototype.max = function(limit) {
  this._addScenario(Scenarios.longerThan(limit));
  const v = this._validValue;
  this._setValidValue(v.length > limit ? v.substr(0, limit) : v);
  return this;
};

StringSchema.prototype.isoDate = function() {
  return this;
};

module.exports = StringSchema;
