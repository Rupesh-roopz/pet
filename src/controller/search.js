const {
    Sequelize,
    Date,
    ExpenseData,
    PaymentMethod,
    Category
} = require('../../models');
const { searchValidation } = require("../helpers/validations/search");
const http = require('../constants/http');

const searchBetweenDates = async(req, res) => {
    try {
        const isValidData = await searchValidation(req.body);

        if (isValidData) {
            const { fromDate, endDate } = req.body;
            const user_id = req.user_id;
            await Date.findAll({
                where: {
                    user_id,
                    date: {
                        [Sequelize.Op.between]: [fromDate, endDate]
                    }
                },
                attributes: ['date'],
                include: [{
                    model: ExpenseData,
                    attributes: ['amount', 'description'],
                    include: [{
                            model: Date,
                            // right: true,
                            attributes: ['date']
                        },
                        {
                            model: PaymentMethod,
                            attributes: ['paymentMethodName']

                        },
                        {
                            model: Category,
                            attributes: ['categoryName']
                        }
                    ]
                }]
            }).then(data => {
                if (data.length) {
                    const result = JSON.stringify(data, null, 2);
                    const parsedResult = JSON.parse(result);
                    const expense = parsedResult.map(obj => {
                        const parsed = JSON.stringify(obj.ExpenseData, null, 4);
                        const result = JSON.parse(parsed);

                        return result.map(expenseObject => {
                            return ({
                                amount: expenseObject.amount,
                                description: expenseObject.description,
                                date: expenseObject.Date.date,
                                paymentMethod: expenseObject.PaymentMethod.paymentMethodName,
                                category: expenseObject.Category.categoryName
                            })
                        })
                    })
                    var merged = [].concat.apply([], expense);
                    return res.status(http.SUCCESS)
                        .json({
                            data: merged,
                            status: 1,
                            error_message: null,
                            success_message: "expense data between dates"
                        });
                }

                res.status(http.SUCCESS)
                    .json({
                        data: null,
                        status: 1,
                        error_message: null,
                        success_message: "'no records found between dates'"
                    });
            }).catch((err) => { throw err });
        }

    } catch (error) {
        console.log(error)
        res.status(http.BAD_REQUEST).json({
            data: null,
            status: 0,
            error_message: error.message,
            success_message: null
        });
    }
};


const advancedSearch = async(req, res) => {
    try {
        const isValidData = await searchValidation(req.body);

        if (isValidData) {
            const {
                fromDate,
                endDate,
                categoryName,
                paymentMethod,
                maxPrice
            } = req.body;
            const user_id = req.user_id;
            await Date.findAll({
                where: {
                    user_id,
                    date: {
                        [Sequelize.Op.between]: [fromDate, endDate]
                    }
                },
                attributes: ['date'],
                include: [{
                    model: ExpenseData,
                    attributes: ['amount', 'description'],
                    where: {
                        amount: {
                            [Sequelize.Op.lte]: maxPrice
                        }
                    },
                    include: [{
                        model: Date,
                        right: true,
                        attributes: ['date']
                    }, {
                        model: PaymentMethod,
                        attributes: ['paymentMethodName'],
                        where: {
                            paymentMethodName: paymentMethod
                        },
                        right: true,
                    }, {
                        model: Category,
                        attributes: ['categoryName'],
                        where: {
                            categoryName
                        },
                    }]
                }]
            }).then(data => {
                if (data.length) {
                    const result = JSON.stringify(data, null, 2);
                    const parsedResult = JSON.parse(result);
                    const expense = parsedResult.map(obj => {
                        const parsed = JSON.stringify(obj.ExpenseData, null, 4);
                        const result = JSON.parse(parsed);

                        return result.map(expenseObject => {
                            return ({
                                amount: expenseObject.amount,
                                description: expenseObject.description,
                                date: expenseObject.Date.date,
                                paymentMethod: expenseObject.PaymentMethod.paymentMethodName,
                                category: expenseObject.Category.categoryName
                            })
                        })
                    })
                    var merged = [].concat.apply([], expense);
                    return res.status(http.SUCCESS)
                        .json({
                            data: merged,
                            status: 1,
                            error_message: null,
                            success_message: "expense data between dates"
                        });
                }

                res.status(http.SUCCESS)
                    .json({
                        data: null,
                        status: 1,
                        error_message: null,
                        success_message: "'no records found between dates'"
                    });
            }).catch((err) => { throw err });
        }
    } catch (error) {
        res.status(http.BAD_REQUEST).json({
            data: null,
            status: 0,
            error_message: error.message,
            success_message: null
        });
    }
};

module.exports = { searchBetweenDates, advancedSearch };