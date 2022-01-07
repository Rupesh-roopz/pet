const express = require('express');
const router = express.Router();

const { authenticateToken } = require('../middlewares/auth');
const {
    addExpense,
    editExpense,
    fetchExpenses,
    deleteExpense
} = require('../controller/expense');



router
    .route('/')
    .post(authenticateToken, (req, res) => {
        addExpense(req, res);
    });


router
    .route('/')
    .put(authenticateToken, (req, res) => {
        editExpense(req, res);
    });

router
    .route('/')
    .get(authenticateToken, (req, res) => {
        fetchExpenses(req, res);
    });

router
    .route('/')
    .delete(authenticateToken, (req, res) => {
        deleteExpense(req, res);
    });

module.exports = router;