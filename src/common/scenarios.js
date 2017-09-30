const scenario = (name, data) => {
  return { name, data };
};

module.exports.scenario = scenario;

module.exports.string = () => scenario('is a string', 'str');
module.exports.number = () => scenario('is a number', 1.1);
module.exports.boolean = () => scenario('is a boolean', true);
module.exports.object = () => scenario('is an object', {});
module.exports.array = () => scenario('is an array', []);
