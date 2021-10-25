const User = require('../models/User');

const create = async ({ name }) => {
  const user = await User.create({ name });

  return { user };
};

const deleteOne = async ({ _id }) => {
  const userExists = await User.findById({ _id });

  if (!userExists) throw new Error('Nenhum usuário encontrado.');

  await User.deleteOne({ _id });

  return 'Usuário removido com sucesso.';
};

const edit = async ({ _id, name }) => {
  const user = await User.findById({ _id });

  if (!user) throw new Error('Nenhum usuário encontrado.');

  await User.updateOne({ _id }, { name });

  return 'Usuário editado com sucesso';
};

const getAll = async () => {
  const users = await User.find();

  return { users };
};

const getOne = async ({ _id }) => {
  const user = await User.findById({ _id });

  if (!user) throw new Error('Nenhum usuário encontrado.');

  return { user };
};

module.exports = {
  create,
  deleteOne,
  edit,
  getAll,
  getOne,
};
