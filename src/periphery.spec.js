const { expect } = require('chai');
const periphery = require('./periphery');
const joi = require('joi');

describe('periphery functional test', () => {
  const peripherySchema = periphery.object({
    stringField: periphery.string().uppercase().min(3),
    dateString: periphery.string().isoDate(),
    objectField: periphery.object({
      stringField: periphery.string().lowercase().max(8)
    })
  });

  const joiSchema = joi.object({
    stringField: joi.string().uppercase().min(3),
    dateString: joi.string().isoDate(),
    objectField: joi.object({
      stringField: joi.string().lowercase().max(8)
    })
  });

  describe('all scenarios should fail schema validation', () => {
    peripherySchema.scenarios().forEach(scenario => {
      it(scenario.name, () => {
        expect(joi.validate(scenario.data, joiSchema, { convert: false }).error).to.not.be.null;
      });
    });
  });

  it('should have a valid value', () => {
    expect(joi.validate(peripherySchema.validValue(), joiSchema, { convert: false }).error).to.be.null;
  });
});
