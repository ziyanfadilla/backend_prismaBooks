const authRouter = require('express').Router();
const authControllers = require('../controllers/auth/authControllers');

authRouter.post('/signUp' , authControllers.signUp);
authRouter.post('/signIn', authControllers.signIn);

module.exports = authRouter;