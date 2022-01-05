'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('MonthlyExpenses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            month: {
                type: Sequelize.INTEGER
            },
            monthStartingDate: {
                type: Sequelize.DATEONLY
            },
            monthlyEarnings: {
                type: Sequelize.STRING
            },
            monthlyExpense: {
                type: Sequelize.STRING
            },
            monthlyBalance: {
                type: Sequelize.STRING
            },
            user_id: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('MonthlyExpenses');
    }
};