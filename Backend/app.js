const express = require('express');

const app = express();
const errrorMiddleware = require('./middlewares/errors');
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

// import routes

const products = require('./routes/product');
const user = require('./routes/user');
const order = require('./routes/order');

app.use('/api/', products);
app.use('/api/', user);
app.use('/api/', order);

app.use(errrorMiddleware);

module.exports = app;
