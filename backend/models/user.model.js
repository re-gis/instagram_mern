const mongoose = require("mongoose");
const userModel = mongoose.Schema;

const userSchema = new userModel(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("User", userSchema)
