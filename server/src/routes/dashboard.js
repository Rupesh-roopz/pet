const express = require('express');
const router = express.Router();

const { authenticateToken } = require('../middlewares/auth');
const {
    fetchCurrentMonth,
    addCurrentMonth,
} = require('../controller/expense');

router
    .route('/')
    .get(authenticateToken, (req, res) => {
        fetchCurrentMonth(req, res);
    });

router
    .route('/')
    .post(authenticateToken, (req, res) => {
        addCurrentMonth(req, res);
    });

module.exports = router;