function BaseSchema(defaultScenarios = [], defaultValidValue = null) {
  this._scenarios = defaultScenarios;
  this._validValue = defaultValidValue;
  this._addScenario = s => this._scenarios.push(s);
  this._addScenarios = s => this._scenarios = this._scenarios.concat(s);
  this._setValidValue = v => this._validValue = v;

  this.scenarios = () => this._scenarios;
  this.validValue = () => this._validValue;
};

module.exports = (defaultScenarios = [], defaultValidValue = null) => {
  function Schema() {
    BaseSchema.call(this, defaultScenarios.slice(0), defaultValidValue);
  };

  Schema.prototype = Object.create(BaseSchema.prototype);
  Schema.prototype.constructor = Schema;

  return Schema;
};
