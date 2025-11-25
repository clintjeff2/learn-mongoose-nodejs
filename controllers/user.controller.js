const User = require("./../models/user.model");

exports.createUser = async (req, res) => {
  const userData = await User.create(req.body);
  //   create, save, find, findById, findByIdAndDelete, findByIdAndUpdate, findOne,
  res
    .status(201)
    .json({ message: "User created successfully", data: userData });
};

exports.getAllUsers = async (req, res) => {
  const allUsers = await User.find();

  res.status(200).json({ message: "Success", data: allUsers });
};

// module.exports = createUser;
