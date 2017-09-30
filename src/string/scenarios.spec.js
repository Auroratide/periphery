const { expect } = require('chai');
const Scenarios = require('./scenarios');

describe('string scenarios', () => {
  it('should contain uppercase letters', () => {
    expect(Scenarios.containsUppercase().data).to.match(/[A-Z]/);
  });

  it('should contain lowercase letters', () => {
    expect(Scenarios.containsLowercase().data).to.match(/[a-z]/);
  });
});
