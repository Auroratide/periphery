const Schema = require('./schema');
module.exports = obj => {
  const schema = new Schema();
  if(obj)
    return schema.keys(obj);
  else
    return schema;
};
