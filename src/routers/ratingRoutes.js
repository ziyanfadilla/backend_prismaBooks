const ratingRoutes = require('express').Router();
const ratingControllers = require('../controllers/ratingControllers');
const chekToken = require ('../helpers/chekToken');

ratingRoutes.get('/', chekToken.chekLogin, ratingControllers.getRating);
ratingRoutes.post('/', ratingControllers.addRating);
ratingRoutes.put('/:id', ratingControllers.updateRating);
ratingRoutes.delete('/:id', ratingControllers.deleteRating);

module.exports = ratingRoutes;