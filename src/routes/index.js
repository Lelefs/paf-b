const { Router } = require('express');
const activitiesRoutes = require('./Activity');
const infosRoutes = require('./Info');
const usersRoutes = require('./User');

const routes = Router();

routes.use('/activities', activitiesRoutes);
routes.use('/infos', infosRoutes);
routes.use('/users', usersRoutes);

module.exports = routes;
