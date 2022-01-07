const regex = require('../../constants/regex');

const signinValidation = async(req) => {
    const { email, password } = req;
    const emailRegx = regex.EMAIL;

    if (email.trim() === '' || !(emailRegx.test(email))) {
        throw ({ message: 'Please enter a valid Email' });
    }
    if (password.trim() === '') {
        throw ({ message: 'Please enter password' });
    }

    return 1;

};

module.exports = { signinValidation };