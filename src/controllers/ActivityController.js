const ActivityService = require('../services/ActivityService');

module.exports = {
  async destroy(req, res) {
    try {
      const response = await ActivityService.deleteOne(req.params);

      return res.json({ message: response });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async index(req, res) {
    try {
      const { activity } = await ActivityService.getOne(req.params);

      return res.json(activity);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async show(req, res) {
    try {
      const { activities } = await ActivityService.getAll();

      return res.json(activities);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async showByUser(req, res) {
    try {
      const { activities } = await ActivityService.getAllByUser(req.params);

      return res.json(activities);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async showLastOneByUser(req, res) {
    try {
      const { activity } = await ActivityService.getLastOneByUser(req.params);

      return res.json(activity);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async store(req, res) {
    try {
      const { newActivity } = await ActivityService.create(req.body);

      return res.json(newActivity);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    const { _id } = req.params;
    const { date, height, user, weight } = req.body;

    try {
      const response = await ActivityService.edit({
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
