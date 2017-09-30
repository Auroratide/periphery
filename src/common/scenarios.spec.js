const { expect } = require('chai');
const Scenarios = require('./scenarios');

describe('common scenarios', () => {
  it('should return a scenario object', () => {
    const scenario = Scenarios.scenario('title', 5);
    expect(scenario.name).to.equal('title');
    expect(scenario.data).to.equal(5);
  });

  it('should be a string', () => {
    expect(Scenarios.string().data).to.be.a('string');
  });

  it('should be a number', () => {
    expect(Scenarios.number().data).to.be.a('number');
  });

  it('should be a boolean', () => {
    expect(Scenarios.boolean().data).to.be.a('boolean');
  });

  it('should be an object', () => {
    expect(Scenarios.object().data).to.be.a('object');
  });

  it('should be an array', () => {
    expect(Scenarios.array().data).to.be.a('array');
  });
});
