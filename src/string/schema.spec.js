const { expect } = require('chai');
const CommonScenarios = require('../common/scenarios');
const Scenarios = require('./scenarios');
const Schema = require('./schema');

describe('string schema', () => {
  const string = () => new Schema();
  const data = scenario => scenario.data;

  describe('scenarios', () => {
    it('should contain type scenarios', () => {
      const scenarios = string().scenarios().map(data);

      expect(scenarios).to.deep.contain(CommonScenarios.number().data);
      expect(scenarios).to.deep.contain(CommonScenarios.boolean().data);
      expect(scenarios).to.deep.contain(CommonScenarios.object().data);
      expect(scenarios).to.deep.contain(CommonScenarios.array().data);
    });

    it('should contain uppercase scenario when lowercase is required', () => {
      const scenarios = string().lowercase().scenarios().map(data);

      expect(scenarios).to.deep.contain(Scenarios.containsUppercase().data);
    });

    it('should contain lowercase scenario when uppercase is required', () => {
      const scenarios = string().uppercase().scenarios().map(data);

      expect(scenarios).to.deep.contain(Scenarios.containsLowercase().data);
    });
  });

  describe('validValue', () => {
    it('should be a string', () => {
      expect(string().validValue()).to.be.a('string');
    });

    it('should be all lowercase', () => {
      expect(string().lowercase().validValue()).to.not.match(/[A-Z]/);
    });

    it('should be all uppercase', () => {
      expect(string().uppercase().validValue()).to.not.match(/[a-z]/);
    });
  });
});
