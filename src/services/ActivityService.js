const Activity = require('../models/Activity');
const User = require('../models/User');

const formatDate = require('../utils/formatDate');

const create = async ({ activity, date, user }) => {
  if (!activity || activity === '') throw new Error('Atividade não informada.');

  const activityDate = date ? await formatDate(date) : new Date();

  if (isNaN(activityDate.getTime())) throw new Error('Data inválida.');

  const userExists = await User.findById({ _id: user });

  if (!userExists) throw new Error('Nenhum usuário encontrado.');

  const newActivity = await Activity.create({
    activity,
    date: activityDate,
    user,
  });

  return { newActivity };
};

const deleteOne = async ({ _id }) => {
  const ActivityExists = await Activity.findById({ _id });

  if (!ActivityExists) throw new Error('Nenhuma atividade encontrada.');

  await Activity.deleteOne({ _id });

  return 'Atividade removida com sucesso.';
};

const edit = async ({ _id, activity, date, user }) => {
  if (!activity || activity === '') throw new Error('Atividade não informada.');

  const ActivityDate = date ? await formatDate(date) : new Date();

  if (isNaN(ActivityDate.getTime())) throw new Error('Data inválida.');

  const currentActivity = await Activity.findById({ _id });

  if (!currentActivity) throw new Error('Nenhuma atividade encontrada.');

  const userExists = await User.findById({ _id: user });

  if (!userExists) throw new Error('Nenhum usuário encontrado.');

  await Activity.updateOne({ _id }, { activity, date: ActivityDate, user });

  return 'Atividade editada com sucesso';
};

const getAll = async () => {
  const activities = await Activity.find().populate('user').sort({ date: -1 });

  return { activities };
};

const getAllByUser = async ({ user }) => {
  const activities = await Activity.find({ user }).sort({ date: -1 });

  return { activities };
};

const getOne = async ({ _id }) => {
  const activity = await Activity.findById({ _id });

  if (!Activity) throw new Error('Nenhuma atividade encontrada.');

  return { activity };
};

const getLastOneByUser = async ({ user }) => {
  const activities = await Activity.find({ user }).sort({ date: -1 });

  return { activity: activities[0] };
};

module.exports = {
  create,
  deleteOne,
  edit,
  getAll,
  getAllByUser,
  getOne,
  getLastOneByUser,
};
