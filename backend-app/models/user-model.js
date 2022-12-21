const {Schema, model} = require('mongoose');

const UserScheme = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  isActivate: {type: Boolean, default: false},
  activationLink: {type: String}
});

module.exports = model('User', UserScheme);
