const { expect } = require('chai');
const CommonScenarios = require('../common/scenarios');
const Scenarios = require('./scenarios');

describe('object scenarios', () => {
  it('should use the scenario data for the field in the object', () => {
    const scenario = CommonScenarios.scenario('a scenario', 'bad data');
    expect(Scenarios.forField('field', scenario, {}).data.field).to.equal('bad data');
  });

  it('should use valid values for all other fields', () => {
    const scenario = CommonScenarios.scenario('a scenario', 'bad data');
    const validValues = {
      field: 'good data',
      other: 'valid data'
    };
    expect(Scenarios.forField('field', scenario, validValues).data.field).to.equal('bad data');
    expect(Scenarios.forField('field', scenario, validValues).data.other).to.equal('valid data');
  });
});
