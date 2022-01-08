module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        dateOfBirth: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profession: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        timestamps: false
    });

    User.associate = (models) => {
        User.hasMany(models.MonthlyExpense, {
            foreignKey: 'user_id',
            sourceKey: 'id'
        });
        models.MonthlyExpense.belongsTo(models.User, {
            foreignKey: 'user_id',
        });
        User.hasMany(models.Date, {
            foreignKey: 'user_id',
            sourceKey: 'id'
        });
        models.Date.belongsTo(models.User, {
            foreignKey: 'user_id',
        });
        User.hasMany(models.ExpenseData, {
            foreignKey: 'user_id',
            sourceKey: 'id'
        });
        models.ExpenseData.belongsTo(models.User, {
            foreignKey: 'user_id',
        });
        User.hasMany(models.DailyExpense, {
            foreignKey: 'user_id',
            sourceKey: 'id'
        });
        models.DailyExpense.belongsTo(models.User, {
            foreignKey: 'user_id',
        });
    };

    return User;
};