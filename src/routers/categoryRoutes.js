const categoryRouter = require('express').Router();
const categoyController = require('../controllers/categoryControllers');
const chekToken = require ('../helpers/chekToken');

categoryRouter.get ('/', chekToken.chekLogin, categoyController.getCategory);
categoryRouter.post ('/', categoyController.postCategory);
categoryRouter.put ('/:id', categoyController.updateCategory);
categoryRouter.delete ('/:id', categoyController.deleteCategory);

module.exports = categoryRouter;