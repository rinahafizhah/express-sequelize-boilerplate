const User = require("../models").user;

exports.getUsers = (req, res) => {
  User.findAll()
    .then(users => res.json({ users }))
    .catch(err => console.error(err));
};

exports.getUserById = async (req, res) => {};
