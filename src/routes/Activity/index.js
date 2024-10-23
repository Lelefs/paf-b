const { Router } = require('express');
const ActivitiesController = require('../../controllers/ActivityController');

const activitiesRoutes = Router();

activitiesRoutes.post('/', ActivitiesController.store);
activitiesRoutes.get('/all', ActivitiesController.show);
activitiesRoutes.get('/:user/all', ActivitiesController.showByUser);
activitiesRoutes.get('/:user/lasteOne', ActivitiesController.showLastOneByUser);
activitiesRoutes.get('/:_id', ActivitiesController.index);
activitiesRoutes.put('/:_id', ActivitiesController.update);
activitiesRoutes.delete('/:_id', ActivitiesController.destroy);

module.exports = activitiesRoutes;
