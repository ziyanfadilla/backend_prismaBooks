const mainRouters = require('express').Router();

const addBooks = require ('../controllers/addBooks');
const auth = require('../controllers/auth/authControllers');
const authRouter = require('./authRouter');
const booksRoutes = require('./booksRoutes');
const categoryRouter = require('./categoryRoutes');


mainRouters.use('/books', booksRoutes);
mainRouters.use('/auth', authRouter);
mainRouters.use('/category', categoryRouter);



module.exports = mainRouters