const { expect } = require('chai');
const Scenarios = require('./scenarios');

describe('string scenarios', () => {
  it('should contain uppercase letters', () => {
    expect(Scenarios.containsUppercase().data).to.match(/[A-Z]/);
  });

  it('should contain lowercase letters', () => {
    expect(Scenarios.containsLowercase().data).to.match(/[a-z]/);
  });

  it('should have more than the number of given characters', () => {
    expect(Scenarios.longerThan(1).data.length).to.be.greaterThan(1);
    expect(Scenarios.longerThan(2).data.length).to.be.greaterThan(2);
    expect(Scenarios.longerThan(4).data.length).to.be.greaterThan(4);
  });

  it('should have less than the number of given characters', () => {
    expect(Scenarios.shorterThan(1).data.length).to.be.lessThan(1);
    expect(Scenarios.shorterThan(2).data.length).to.be.lessThan(2);
    expect(Scenarios.shorterThan(4).data.length).to.be.lessThan(4);
  });
});
