const { Router } = require('express');
const InfosController = require('../../controllers/InfosController');

const infosRoutes = Router();

infosRoutes.post('/', InfosController.store);
infosRoutes.get('/all', InfosController.show);
infosRoutes.get('/:user/all', InfosController.showByUser);
infosRoutes.get('/:_id', InfosController.index);
infosRoutes.put('/:_id', InfosController.update);
infosRoutes.delete('/:_id', InfosController.destroy);

module.exports = infosRoutes;
