const { expect } = require('chai');
const CommonScenarios = require('../common/scenarios');
const Scenarios = require('./scenarios');
const Schema = require('./schema');

describe('object schema', () => {
  const object = () => new Schema();
  const data = scenario => scenario.data;

  const fakeSchema = (scenario) => { return {
    scenarios: () => [scenario],
    validValue: () => 'good data'
  } };

  describe('scenarios', () => {
    it('should contain type scenarios', () => {
      const scenarios = object().scenarios().map(data);

      expect(scenarios).to.deep.contain(CommonScenarios.number().data);
      expect(scenarios).to.deep.contain(CommonScenarios.boolean().data);
      expect(scenarios).to.deep.contain(CommonScenarios.string().data);
      expect(scenarios).to.deep.contain(CommonScenarios.array().data);
    });

    it('should create a new scenario for each scenario in nested schemas', () => {
      const scenario = CommonScenarios.scenario('a fake scenario', 'bad data');

      const scenarios = object().keys({
        field1: fakeSchema(scenario),
        field2: fakeSchema(scenario)
      }).scenarios().map(data);

      const validValues = {
        field1: 'good data',
        field2: 'good data'
      };

      expect(scenarios).to.deep.contain(Scenarios.forField('field1', scenario, validValues).data);
      expect(scenarios).to.deep.contain(Scenarios.forField('field2', scenario, validValues).data);
    });
  });

  describe('validValue', () => {
    it('should be an object', () => {
      expect(object().validValue()).to.be.a('object');
    });

    it('should be an object where each field is a valid value', () => {
      const scenario = CommonScenarios.scenario('a fake scenario', 'bad data');

      const validValue = object().keys({
        field1: fakeSchema(scenario),
        field2: fakeSchema(scenario)
      }).validValue();

      expect(validValue).to.deep.equal({
        field1: 'good data',
        field2: 'good data'
      });
    });
  });
});
