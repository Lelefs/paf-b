const UserService = require('../services/UserService');

module.exports = {
  async index(req, res) {
    const { _id } = req.params;

    try {
      const { user } = await UserService.getOne({ _id });

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async show(req, res) {
    try {
      const { users } = await UserService.getAll();

      return res.json(users);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async store(req, res) {
    try {
      const { user } = await UserService.create(req.body);

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
};
