'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('DailyExpenses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            dailyTotalExpense: {
                type: Sequelize.INTEGER
            },
            date_id: {
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('DailyExpenses');
    }
};