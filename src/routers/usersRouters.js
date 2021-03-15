const userRoutes= require ('express').Router();
const userControllers = require('../controllers/userControllers');
const userController = require('../controllers/userControllers');
const chekToken = require('../helpers/chekToken');


userRoutes.get('/', userController.getUsers);
userRoutes.get('/:id', userController.getUsersid);
userRoutes.put('/:id',userController.updateUsers);
userRoutes.post('/' , userController.addUsers);
userRoutes.delete('/:id', userControllers.deleteUsers);


module.exports =  userRoutes ; 