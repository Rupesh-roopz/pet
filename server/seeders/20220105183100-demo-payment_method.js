module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('PaymentMethods', [{
            id: 1,
            paymentMethodName: "Debit card"
        }], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('PaymentMethods', null, {});
    }
};