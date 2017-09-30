const { expect } = require('chai');
const string = require('./string');
const Scenarios = require('../../scenarios');

describe.only('string schema', () => {

  const data = scenario => scenario.data;

  describe('scenarios', () => {
    it('should create type scenarios', () => {
      const scenarios = string().scenarios().map(data);

      expect(scenarios).to.deep.contain(Scenarios.number().data);
      expect(scenarios).to.deep.contain(Scenarios.boolean().data);
      expect(scenarios).to.deep.contain(Scenarios.object().data);
      expect(scenarios).to.deep.contain(Scenarios.array().data);
    });
  });

  describe('validValue', () => {
    it('should be a valid string', () => {
      expect(string().validValue()).to.be.a('string');
    });
  });
});
