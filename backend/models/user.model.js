const mongoose = require("mongoose");
const userModel = mongoose.Schema;

const userSchema = new userModel(
  {
    username: {
      type: String,
    },
    fullname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
    },
    photo: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
