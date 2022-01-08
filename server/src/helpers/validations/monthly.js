const { month } = require('../manageDates');

const monthlyExpenseValidation = async(req) => {
    const { monthStartingDate } = req;
    const userSelectedMonth = month(monthStartingDate);
    let currentMonth = new Date().getMonth() + 1;

    if (!(currentMonth === userSelectedMonth)) {
        throw { message: 'please select a date from current month' };
    }
    return 1;
};

module.exports = { monthlyExpenseValidation };