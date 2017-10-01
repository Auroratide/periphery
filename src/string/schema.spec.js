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

    it('should contain longerThan scenario when max length is required', () => {
      const scenarios = string().max(5).scenarios().map(data);

      expect(scenarios).to.deep.contain(Scenarios.longerThan(5).data);
    });

    it('should contain shorterThan scenario when min length is required', () => {
      const scenarios = string().min(5).scenarios().map(data);

      expect(scenarios).to.deep.contain(Scenarios.shorterThan(5).data);
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

    it('should have at most the number of characters given by the limit', () => {
      expect(string().max(7).validValue().length).to.be.at.most(7);
    });

    it('should have at least the number of characters given by the limit', () => {
      expect(string().min(7).validValue().length).to.be.at.least(7);
    });
  });
});
