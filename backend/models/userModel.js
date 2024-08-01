const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
    },
    working: {
      type: String,
      require: true,
    },
    experience: {
      type: String,
      require: true,
    },
    location: {
      type: String,
      require: true,
    },
    type: {
      type: Boolean,
      require: true,
    },
    skills: [],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", UserSchema);
