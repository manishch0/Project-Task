const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  // phone: Number,
  phone: {
    type: String,
    required: true,
  },
  password: String,
});
module.exports = mongoose.model("user", userSchema);
