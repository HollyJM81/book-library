const { Reader } = require('../models');

const newReader = async (req, res) => {
  const { name, email } = req.body;

  await Reader.create(req.body);
  res.status(201).json(name, email);
};

module.exports = {
  newReader,
};
