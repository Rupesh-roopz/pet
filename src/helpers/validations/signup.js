const regex = require('../../constants/regex');
const { getYear } = require('../manageDates');

const userValidation = async(req) => {
    const {
        firstName,
        lastName,
        dateOfBirth,
        profession,
        phoneNumber,
        password,
        reEnterPassword,
        isAdmin
    } = req;
    const passwordRegx = regex.PASSWORD;

    if (firstName.trim() === '') {
        throw ({ message: 'Please enter a first name' });
    }
    if (lastName.trim() === '') {
        throw ({ message: 'Please enter a last name' });
    }
    if (profession.trim() === '') {
        throw ({ message: 'Please enter your profession' });
    }
    if (isAdmin === "") {
        throw ({ message: 'Please choose Admin field' });
    }
    if (phoneNumber.length !== 10) {
        throw ({ message: 'Please enter a valid mobile number' });
    }

    if (!(passwordRegx.test(password))) {
        throw ({ message: 'please enter a strong password' });
    }
    if (reEnterPassword !== password) {
        throw ({ message: 'password must be same' });
    }

    const birthYear = getYear(dateOfBirth);
    let currentYear = new Date().getFullYear();

    if ((birthYear + 15) >= currentYear) {
        throw ({ message: 'Age must be greater than 15' });
    }

    return 1;
};

module.exports = { userValidation };