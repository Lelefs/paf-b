const InfoService = require('../services/InfoService');

module.exports = {
  async destroy(req, res) {
    try {
      const response = await InfoService.deleteOne(req.params);

      return res.json({ message: response });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async index(req, res) {
    try {
      const { info } = await InfoService.getOne(req.params);

      return res.json(info);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async show(req, res) {
    try {
      const { infos } = await InfoService.getAll();

      return res.json(infos);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async showByUser(req, res) {
    try {
      const { infos } = await InfoService.getAllByUser(req.params);

      return res.json(infos);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async store(req, res) {
    try {
      const { info } = await InfoService.create(req.body);

      return res.json(info);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    const { _id } = req.params;
    const { date, height, user, weight } = req.body;

    try {
      const response = await InfoService.edit({
        _id,
        date,
        height,
        user,
        weight,
      });

      return res.json({ message: response });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
};
