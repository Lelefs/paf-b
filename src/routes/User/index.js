const { Router } = require('express');
const UsersController = require('../../controllers/UsersController');

const usersRoutes = Router();

usersRoutes.post('/', UsersController.store);
usersRoutes.get('/all', UsersController.show);
usersRoutes.get('/:_id', UsersController.index);
usersRoutes.put('/:_id', UsersController.update);
usersRoutes.delete('/:_id', UsersController.destroy);

module.exports = usersRoutes;
