const paymentMethodValdation = async(req) => {
    const { paymentMethodName } = req;

    if ((/\d/.test(paymentMethodName)) || paymentMethodName.trim() === '') {
        throw ({ message: 'Please enter a valid name' });
    }

    if (paymentMethodName.trim().length < 4 ||
        paymentMethodName.trim().length > 15) {
        throw ({
            message: 'payment name must be strong'
        });
    }

    return 1;
};

module.exports = { paymentMethodValdation };