const { dateComparision } = require('../manageDates');

const dateValidation = async(req) => {
    console.log(req)
    const { from_date, to_date } = req;
    console.log(dateComparision(from_date, to_date))

    if (dateComparision(from_date, to_date)) {
        throw ({ message: 'please input date correctly' });
    }
    return 1;
};

module.exports = { dateValidation };