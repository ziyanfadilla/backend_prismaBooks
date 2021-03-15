const borrowRoutes = require('express').Router();
const borrowControllers = require('../controllers/borrowControllers');
const chekToken = require('../helpers/chekToken');
const booksRoutes = require('./booksRoutes');

borrowRoutes.get ('/', chekToken.chekLogin, borrowControllers.getBorrow);
borrowRoutes.post ('/', borrowControllers.addBorrow);
borrowRoutes.put('/:id', borrowControllers.updateBorrow);
borrowRoutes.delete('/:id', borrowControllers.deleteBorrow);

module.exports = borrowRoutes;