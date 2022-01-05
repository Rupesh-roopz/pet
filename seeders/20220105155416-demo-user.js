module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            firstName: 'Elon',
            lastName: 'Musk',
            email: 'elon.test@test.com',
            dateOfBirth: '2020-12-12',
            gender: 'male',
            profession: 'SE',
            phoneNumber: '12345667890',
            password: 'hello@123',
            isAdmin: 1,
        }, {
            firstName: 'Ratan',
            lastName: 'Musk',
            email: 'elon.test1@test.com',
            dateOfBirth: '2020-12-12',
            gender: 'male',
            profession: 'SE',
            phoneNumber: '12345667890',
            password: 'hello@123',
            isAdmin: 0
        }], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};