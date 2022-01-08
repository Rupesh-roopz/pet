const express = require('express');
const app = express();

const user = require('./user');
const dashboard = require('./dashboard')
const expense = require('./expense');
const category = require('./catagory');
const payment = require('./payment_method');

const router = () => {
    app.use('/user', user);
    app.use('/dashboard', dashboard);
    app.use('/expense', expense);
    app.use('/category', category);
    app.use('/payment-method', payment);

    return app;
};

module.exports = router;