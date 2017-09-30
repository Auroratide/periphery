const { expect } = require('chai');
const string = require('./string');
const Scenario = require('../../scenario');

describe.only('string schema', () => {

  const data = scenario => scenario.data;

  describe('scenarios', () => {
    it('should create type scenarios', () => {
      const scenarios = string().scenarios().map(data);

      expect(scenarios).to.deep.contain(Scenario.number().data);
      expect(scenarios).to.deep.contain(Scenario.boolean().data);
      expect(scenarios).to.deep.contain(Scenario.object().data);
      expect(scenarios).to.deep.contain(Scenario.array().data);
    });
  });

  describe('validValue', () => {
    it('should be a valid string', () => {
      expect(string().validValue()).to.be.a('string');
    });
  });
});
