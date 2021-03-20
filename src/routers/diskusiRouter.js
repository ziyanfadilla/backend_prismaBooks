const diskusiRouter = require('express').Router();
const diskusiControllers = require('../controllers/diskusiControllers');
const chekToken = require ('../helpers/chekToken');

diskusiRouter.post('/', diskusiControllers.addDiskusi);
diskusiRouter.get('/', chekToken.chekLogin, diskusiControllers.getDiskusi);
diskusiRouter.put('/:id', diskusiControllers.updateDiskusi);
diskusiRouter.delete('/:id' , diskusiControllers.deleteDiskusi);


module.exports = diskusiRouter;