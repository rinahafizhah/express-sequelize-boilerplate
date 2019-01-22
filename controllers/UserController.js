const User = require("../models").user;

exports.getUsers = (req, res) => {
  User.findAll()
    .then(users => res.json({ users }))
    .catch(err => console.error(err));
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({ user });
  } catch (err) {
    console.error(err);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({ user });
  } catch (err) {
    console.error(err);
  }
};
