const scenario = (name, data) => {
  return { name, data };
};

module.exports = scenario;
module.exports.withField = field => s => scenario(s.name.replace('$field', field), s.data);

module.exports.string = () => scenario('$field is a string', 'str');
module.exports.number = () => scenario('$field is a number', 1.1);
module.exports.boolean = () => scenario('$field is a boolean', true);
module.exports.object = () => scenario('$field is an object', {});
module.exports.array = () => scenario('$field is an array', []);
