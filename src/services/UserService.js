const User = require('../models/User');

const create = async ({ name }) => {
  const user = await User.create({ name });

  return { user };
};

const getAll = async () => {
  const users = await User.find();

  return { users };
};

const getOne = async ({ _id }) => {
  const user = await User.findOne({ _id });

  if (!user) throw new Error('Nenhum usuário encontrado.');

  return { user };
};

module.exports = {
  create,
  getAll,
  getOne,
};
