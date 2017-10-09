const { expect } = require('chai');
const Scenarios = require('./scenarios');

describe('string scenarios', () => {
  const data = scenario => scenario.data;

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

  it('should be empty', () => {
    expect(Scenarios.empty().data).to.be.empty;
  });

  it('should be alphanumeric', () => {
    expect(Scenarios.alphanumeric().data).to.match(/^[a-zA-Z0-9]*$/);
  });

  it('should be in DD-MM-YYYY format', () => {
    expect(Scenarios.dayMonthYear().data).to.match(/^[0-3][0-9]-[01][0-9]-[0-9]{4}$/);
  });

  it('should include invalid months in ISO format', () => {
    Scenarios.isoInvalidMonths().map(data).forEach(d => {
      expect(d).to.match(/^[0-9]{4}-[0-9]{2}/);
      expect(d).to.not.match(/^[0-9]{4}-(0[1-9]|1[0-2])/);
    });
  });
});
