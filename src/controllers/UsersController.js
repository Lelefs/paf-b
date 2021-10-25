const UserService = require('../services/UserService');

module.exports = {
  async destroy(req, res) {
    try {
      const response = await UserService.deleteOne(req.params);

      return res.json({ message: response });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async index(req, res) {
    try {
      const { user } = await UserService.getOne(req.params);

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

  async update(req, res) {
    const { _id } = req.params;
    const { name } = req.body;

    try {
      const response = await UserService.edit({ _id, name });

      return res.json({ message: response });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
};
