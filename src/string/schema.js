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
  this._scenarios.push(Scenarios.containsUppercase());
  this._validValue = this._validValue.toLowerCase();
  return this;
};

StringSchema.prototype.uppercase = function() {
  this._scenarios.push(Scenarios.containsLowercase());
  this._validValue = this._validValue.toUpperCase();
  return this;
};

StringSchema.prototype.min = function(limit) {
  this._scenarios.push(Scenarios.shorterThan(limit));
  const v = this._validValue;
  this._validValue = v.length < limit ? v + v[0].repeat(limit - v.length) : v;
  return this;
};

StringSchema.prototype.max = function(limit) {
  this._scenarios.push(Scenarios.longerThan(limit));
  const v = this._validValue;
  this._validValue = v.length > limit ? v.substr(0, limit) : v;
  return this;
};

module.exports = StringSchema;
