let users = [
  { id: 1, name: "Gatot" },
  { id: 1, name: "Bunda" },
  { id: 3, name: "Ayah" }
];

exports.getUsers = (req, res) => {
  res.json({ users });
};
