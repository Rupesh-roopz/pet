const {
    sequelize,
    MonthlyExpense,
    ExpenseData,
    DailyExpense,
    Date,
    Category,
    PaymentMethod
} = require('../../models');
const http = require('../constants/http');
const { presentMonth, month } = require('../helpers/manageDates');
const { monthlyExpenseValidation } = require('../helpers/validations/monthly');
const { expenseFormValidation } = require('../helpers/validations/expense');
const { isCurrentMonth } = require('../helpers/isCurrentMonth');


const fetchExpenses = async(req, res) => {
    try {
        const user_id = req.user_id;
        const { total_expense_month, total_expense_date, current_month } = req.query;
        if (current_month && !total_expense_date && !total_expense_month) {
            const currentMonth = presentMonth(current_month);
            //gettig userId from authorization payload
            const id = req.user_id;

            const data = await MonthlyExpense.findOne({
                attributes: ['id'],
                where: {
                    user_id: id,
                    month: currentMonth
                }
            })
            if (data !== null) {
                res.status(http.SUCCESS)
                    .json({
                        data: null,
                        status: 1,
                        error_message: null,
                        success_message: "current month existed"
                    });
                return;
            }
            throw ({ message: "Current month data not found" })

        }
        if (!total_expense_date && !total_expense_month && !current_month) {
            const data = await ExpenseData.findAll({
                attributes: ['id', 'amount',
                    'description'
                ],
                where: {
                    user_id,
                },
                include: [{
                    model: Date,
                    right: true,
                    attributes: ['date']
                }, {
                    model: PaymentMethod,
                    attributes: ['paymentMethodName']

                }, {
                    model: Category,
                    attributes: ['categoryName']
                }],
            })
            if (data.length) {
                const result = JSON.stringify(data, null, 2);
                const parsedResult = JSON.parse(result);
                const expenses = parsedResult.map(obj => {
                    return {
                        id: obj.id,
                        date: obj.Date.date,
                        amount: obj.amount,
                        description: obj.description,
                        category: obj.Category.categoryName,
                        paymentMethod: obj.PaymentMethod.paymentMethodName
                    }
                })
                res.status(http.SUCCESS)
                    .json({
                        data: expenses,
                        status: 1,
                        error_message: null,
                        success_message: "Total expenses"
                    });
                return;
            }
            res.status(http.SUCCESS)
                .json({
                    data: null,
                    status: 1,
                    error_message: null,
                    success_message: "No expenses added"
                });
            return;
        }
        if (total_expense_date && !total_expense_month && !current_month) {
            await Date.findOne({
                    where: { user_id, date: total_expense_date },
                    include: { model: DailyExpense }
                })
                .then(data => {
                    const result = JSON.stringify(data, null, 2);
                    const parsedResult = JSON.parse(result);
                    if (parsedResult == null)
                        return res.status(http.SUCCESS)
                            .json({
                                data: null,
                                status: 1,
                                error_message: null,
                                success_message: "No expenses added today"
                            });
                    const total = parsedResult.DailyExpenses[0].dailyTotalExpense;
                    res.status(http.SUCCESS).json({
                        data: total,
                        status: 1,
                        error_message: null,
                        success_message: "Total expense of a day"
                    });
                    return;
                })
                .catch(err => { throw err });
        }
        if (total_expense_month && !total_expense_date && !current_month) {
            const userSelectedMonth = month(total_expense_month);

            await MonthlyExpense.findOne({
                where: {
                    user_id,
                    month: userSelectedMonth
                },
                include: {
                    model: Date,
                    attributes: [
                        [sequelize.fn('sum', sequelize.col('amount')), 'total']
                    ],
                    include: { model: ExpenseData }
                },
                group: ['user_id']
            }).then(async data => {
                const result = JSON.stringify(data, null, 2);
                const parsedResult = JSON.parse(result);
                if (!parsedResult.Dates.length) {
                    res.status(http.SUCCESS)
                        .json({
                            data: null,
                            status: 1,
                            error_message: null,
                            success_message: "No expenses added on this month"
                        });
                    return;
                }
                const totalMonthExpense = parsedResult.Dates[0].total;
                return await MonthlyExpense.update({
                    monthlyExpense: totalMonthExpense,
                    monthlyBalance: parsedResult.monthlyEarnings - totalMonthExpense
                }, {
                    where: {
                        user_id,
                        month: userSelectedMonth
                    }
                });
            }).then(async() => {
                return await MonthlyExpense.findOne({
                    where: {
                        user_id,
                        month: userSelectedMonth
                    }
                });
            }).then(data => {
                res.status(http.SUCCESS).json({
                    data: data,
                    status: 1,
                    error_message: null,
                    success_message: "Total month expense"

                });
                return;
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
}


// const isCurrentMonthExist = async(req, res) => {
//     try {
//         //presentMonth function will return current month
//         const currentMonth = presentMonth();
//         //gettig userId from authorization payload
//         const id = req.user_id;

//         const data = await MonthlyExpense.findOne({
//             attributes: ['id'],
//             where: {
//                 user_id: id,
//                 month: currentMonth
//             }
//         })
//         if (data === null) {
//             res.status(http.SUCCESS)
//                 .json({ message: 'current month data not found' });
//             return;
//         }
//         res.status(http.SUCCESS)
//             .json({ message: 'current month is existed' });
//         return;
//     } catch (error) {
//         console.log(error)
//         res.status(http.BAD_REQUEST).json(error);
//     }
// };

const monthlyExpense = async(req, res) => {
    try {
        //Validating client data
        const isValidData = await monthlyExpenseValidation(req.body);

        if (isValidData) {
            const {
                monthStartingDate,
                monthlyEarnings,
                monthlyExpense,
                monthlyBalance
            } = req.body;
            //month function will return current month by input date
            const currentMonth = month(monthStartingDate);
            //gettig userId from authorization payload
            const user_id = req.user_id;

            //checking wether current month already exists or  not
            await MonthlyExpense.findOne({
                where: { user_id, month: currentMonth }
            }).then(async data => {
                if (data)
                    throw {
                        message: 'monthly income already exists'
                    };
                return await MonthlyExpense.create({
                    user_id,
                    month: currentMonth,
                    monthStartingDate,
                    monthlyEarnings,
                    monthlyExpense,
                    monthlyBalance
                });
            }).then(data => {
                res.status(http.CREATED).json({
                    data: data,
                    status: 1,
                    error_message: null,
                    success_message: "monthly earnings added"
                });
            }).catch(err => { throw err });
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

const addExpense = async(req, res) => {
    try {
        //validating the input fields
        const isValidData = await expenseFormValidation(req.body);

        if (isValidData) {
            const {
                date,
                amount,
                paymentMethod,
                category,
                description
            } = req.body;
            //month function will return current month by input date
            const userMonth = month(date);
            //gettig userId from authorization payload
            const user_id = req.user_id;

            //checking wether payment method and
            // category name is existing or not
            let month_id, date_id, category_id, paymentMethod_id;
            //Getting id of a user date's month ID
            await MonthlyExpense.findOne({
                attributes: ['id'],
                where: {
                    user_id,
                    month: userMonth
                }
            }).then(async(data) => {
                console.log(data)
                month_id = data.id;
                return await Date.findOrCreate({
                    attributes: ['id'],
                    where: {
                        user_id,
                        month_id,
                        date
                    },
                    defaults: {
                        date,
                        user_id,
                        month_id
                    }
                });
            }).then(async data => {
                date_id = data[0].id;
                return await Category.findOne({
                    attributes: ['id'],
                    where: {
                        categoryName: category
                    }
                });
            }).then(async data => {
                category_id = data.id;
                //Getting paymentID wrto payment method
                return await PaymentMethod.findOne({
                    attributes: ['id'],
                    where: {
                        paymentMethodName: paymentMethod
                    }
                });
            }).then(async data => {
                paymentMethod_id = data.id;
                //adding exform form data to table
                return await ExpenseData.create({
                    user_id,
                    category_id,
                    date_id,
                    amount,
                    description,
                    paymentMethod_id
                });
            }).then(async() => {
                //Updating Daily expense table
                const isDataFound = await DailyExpense.findOne({
                    where: {
                        user_id,
                        date_id
                    },
                    include: {
                        model: Date,
                        attributes: [
                            [sequelize.fn('sum', sequelize.col('amount')),
                                'total'
                            ]
                        ],
                        include: {
                            model: ExpenseData
                        }
                    }
                });
                if (isDataFound.dailyTotalExpense == null) {
                    return await DailyExpense.create({
                        dailyTotalExpense: amount,
                        date_id,
                        user_id
                    });
                }
                const result = JSON.stringify(isDataFound, null, 2);
                const parsedResult = JSON.parse(result);
                return await DailyExpense.update({
                    dailyTotalExpense: parsedResult.Date.total
                }, {
                    where: {
                        user_id,
                        date_id
                    }
                });
            }).then(() => {
                res.status(http.CREATED).json({
                    data: null,
                    status: 1,
                    error_message: null,
                    success_message: "Expense added"
                });
            }).catch(err => { throw err });
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


const editExpense = async(req, res) => {
    try {
        const user_id = req.user_id;
        //validating client data if valid returns 1 else throws error
        const isValidData = await expenseFormValidation(req.body);
        //checking weather updating for current month or not
        //if current month returns 1 else throws error
        const currentMonth = await isCurrentMonth(req.body.id, user_id);

        if (isValidData && currentMonth) {
            const {
                id,
                amount,
                category,
                paymentMethod,
                description
            } = req.body;
            let category_id, paymentMethod_id, date_id;

            return await ExpenseData.findOne({
                where: { id },
                include: { model: Date }
            }).then(async data => {
                const result = JSON.stringify(data, null, 2);
                const parsedResult = JSON.parse(result);
                date_id = parsedResult.Date.id;
                return await Category.findOne({
                    where: {
                        categoryName: category
                    }
                });
            }).then(async data => {
                category_id = data.id;
                return await PaymentMethod.findOne({
                    where: {
                        paymentMethodName: paymentMethod
                    }
                });
            }).then(async data => {
                paymentMethod_id = data.id;
                return await ExpenseData.update({
                    category_id,
                    paymentMethod_id,
                    description,
                    amount
                }, {
                    where: {
                        id: id
                    }
                });
            }).then(async data => {
                if (data[0]) {
                    return await DailyExpense.findOne({
                        id: date_id
                    });
                }
                throw ({
                    message: 'not updated! values remains same'
                });
            }).then(async data => {
                const total = data.dailyTotalExpense;
                return await DailyExpense.update({
                    dailyTotalExpense: total + amount
                }, { where: { id: date_id } });
            }).then(async data => {
                if (data[0]) {
                    res.status(http.CREATED)
                        .json({
                            data: null,
                            status: 1,
                            error_message: null,
                            success_message: "expense updated successfully"
                        });
                    return;
                }
                throw ({
                    message: 'not updated! values remains same'
                });
            }).catch(err => { throw err });
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


const deleteExpense = async(req, res) => {
    try {
        const user_id = req.user_id;
        const expense_id = req.query.id;
        //checking the expense is from current month
        const currentMonth = await isCurrentMonth(expense_id, user_id);
        let date_id, amount;
        if (currentMonth) {
            await ExpenseData.findOne({
                where: { id: expense_id },
                include: { model: Date }
            }).then(async data => {
                const result = JSON.stringify(data, null, 2);
                const parsedResult = JSON.parse(result);
                amount = amount;
                date_id = parsedResult.Date.id;
                //deleting from expense data table
                return await ExpenseData.destroy({
                    where: { id: expense_id }
                });
            }).then(async data => {
                if (data) {
                    return await DailyExpense.findOne({
                        id: date_id
                    });
                }
                res.status(http.ACCEPTED)
                    .json({
                        data: null,
                        status: 1,
                        error_message: null,
                        success_message: "expense not deleted"
                    });
            }).then(async data => {
                // updating total expense table
                const total = data.dailyTotalExpense;
                return await DailyExpense.update({
                    dailyTotalExpense: total + amount
                }, { where: { id: date_id } });
            }).then(() => {
                return res.status(http.SUCCESS)
                    .json({
                        data: null,
                        status: 1,
                        error_message: null,
                        success_message: "Expense deleted successfully"
                    });
            }).catch(err => { throw err });
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

module.exports = {
    monthlyExpense,
    addExpense,
    editExpense,
    fetchExpenses,
    deleteExpense
};