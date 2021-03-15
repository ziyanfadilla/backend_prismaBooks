const mainRouters = require('express').Router();

const addBooks = require ('../controllers/addBooks');
const auth = require('../controllers/auth/authControllers');
const authRouter = require('./authRouter');
const booksRoutes = require('./booksRoutes');
const categoryRouter = require('./categoryRoutes');
const userRoutes = require('./usersRouters');
const borrowRoutes = require('./borrowRoutes');


mainRouters.use('/books', booksRoutes);
mainRouters.use('/auth', authRouter);
mainRouters.use('/category', categoryRouter);
mainRouters.use('/users', userRoutes);
mainRouters.use('/borrow',borrowRoutes);


module.exports = mainRouters