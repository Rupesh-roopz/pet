const { presentMonth, month } = require('../manageDates');

const expenseFormValidation = async(req) => {
    const { amount, date } = req;
    const currentMonth = presentMonth(new Date());
    const selectedMonth = month(date);

    if (currentMonth !== selectedMonth)
        throw ({ message: 'choose date from current month' });
    if (amount <= 0)
        throw { message: 'Please enter minimum amount' };

    return 1;
};

module.exports = { expenseFormValidation };