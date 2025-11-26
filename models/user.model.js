const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 15,
  },
  dob: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true,
  },
  mat: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 6,
    maxLength: 6,
  },
  department: {
    type: String,
    trim: true,
  },
  specialty: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
      message: "Gender can only be male or female",
    },
  },
  level: {
    type: Number,
    required: true,
    enum: {
      values: [200, 300, 400, 601, 602],
      message: "Student levels can only be 200, 300, 400, 601, or 602",
    },
  },
  password: {
    type: String,
    minLength: 8,
    required: true,
  },
  confirmPassword: {
    type: String,
    minLength: 8,
    require: true,
    validate: {
      validator: function (val) {
        const isCorrect = val === this.password;
        return isCorrect;
      },
      message: "Passwords do not match, please try again!",
    },
  },
  isDeleted: {
    type: Boolean,
    default: false,
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
