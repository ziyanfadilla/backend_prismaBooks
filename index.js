require('dotenv').config({});
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const mainRouters = require('./src/routers');
 

app.use(express.json());
app.use(express.urlencoded ({extended : false}));
app.use('/', mainRouters);


app.listen(3001, () => {
    console.log("server berjalann ");
});