const User = require("./../models/user.model");

const createUser = async (req, res) => {

  await User.create(req.body);
//   create, save, find, findById, findByIdAndDelete, findByIdAndUpdate, findOne, 

  console.log(req.body);

  res.status(200).json({ message: "We have received your request!" });
};

module.exports = createUser;
