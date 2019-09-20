const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  companyINN: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  //password: {
  //  type: String,
  //  required: true
  //},
  email: {
    type: String,
    required: true
  },
  contactPerson: {
    type: String,
    required: true
  },
  companyPhone: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = User = mongoose.model("users", UserSchema);
