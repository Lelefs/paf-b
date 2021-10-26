const { Router } = require('express');
const usersRoutes = require('./User');
const infosRoutes = require('./Info');

const routes = Router();

routes.use('/infos', infosRoutes);
routes.use('/users', usersRoutes);

module.exports = routes;
