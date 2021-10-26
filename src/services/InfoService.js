const Info = require('../models/Info');
const User = require('../models/User');

const formatDate = require('../utils/formatDate');

const create = async ({ date, height, user, weight }) => {
  const userExists = await User.findById({ _id: user });

  if (!userExists) throw new Error('Nenhum usuário encontrado.');

  const infoDate = date ? await formatDate(date) : new Date();

  if (isNaN(infoDate.getTime())) throw new Error('Data inválida.');

  const info = await Info.create({ date: infoDate, height, user, weight });

  return { info };
};

const deleteOne = async ({ _id }) => {
  const infoExists = await Info.findById({ _id });

  if (!infoExists) throw new Error('Nenhuma informação encontrada.');

  await Info.deleteOne({ _id });

  return 'Informação removida com sucesso.';
};

const edit = async ({ _id, date, height, user, weight }) => {
  const info = await Info.findById({ _id });

  if (!info) throw new Error('Nenhuma informação encontrada.');

  const userExists = await User.findById({ _id: user });

  if (!userExists) throw new Error('Nenhum usuário encontrado.');

  const infoDate = date ? await formatDate(date) : new Date();

  if (isNaN(infoDate.getTime())) throw new Error('Data inválida.');

  await Info.updateOne({ _id }, { date: infoDate, height, user, weight });

  return 'Informação editada com sucesso';
};

const getAll = async () => {
  const infos = await Info.find().populate('user');

  return { infos };
};

const getAllByUser = async ({ user }) => {
  const infos = await Info.find({ user });

  return { infos };
};

const getOne = async ({ _id }) => {
  const info = await Info.findById({ _id });

  if (!info) throw new Error('Nenhuma informação encontrada.');

  return { info };
};

module.exports = {
  create,
  deleteOne,
  edit,
  getAll,
  getAllByUser,
  getOne,
};
