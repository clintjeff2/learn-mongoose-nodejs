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

exports.getUser = async (req, res) => {
  const userId = req.params.id;

  const userData = await User.findById(userId);

  res
    .status(200)
    .json({ message: "User data gotten successfully!", data: userData });
};

exports.getByLevel = async (req, res) => {
  const year = req.body.level;

  const users = await User.find({ level: { $gt: year } }); //lt, lte, gt, gte, eq, ne

  res.status(200).json({ message: "Success", users: users });
};

exports.getByGender = async (req, res) => {
  const sex = req.body.gender;

  const users = await User.find({ gender: sex });

  res.status(200).json({ message: "Gotten with success", users: users });
};
exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findByIdAndUpdate(
    userId,
    { level: 400, isDeleted: false },
    { new: true }
  );

  res.status(200).json({ message: "User updated", user: user });
};
