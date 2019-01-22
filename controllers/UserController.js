let users = [
  { id: 1, name: "Gatot" },
  { id: 2, name: "Bunda" },
  { id: 3, name: "Ayah" }
];

exports.getUsers = (req, res) => {
  res.json({ users });
};
