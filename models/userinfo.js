const mongoose = require("mongoose");

const userSchema = {
  name: String,
  email: String,
  password: String
};

var User = mongoose.model('users',userSchema);

module.exports = User;
