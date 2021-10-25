const { Router } = require('express');
const usersRoutes = require('./User');

const routes = Router();

routes.use('/users', usersRoutes);

module.exports = routes;
