const Sequelize = require('sequelize');
const { sequelize } = require("../database/sequelize");
const bcrypt = require('bcrypt');

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id'
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: 'login'
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'password'
    },
    role: {
        type: Sequelize.STRING,
        values: ['user', 'driver', 'admin'],
        defaultValue: 'user',
        allowNull: false,
        field: 'role'
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
        field: 'is_active'
    },
    isConfirmed: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
        field: 'is_confirmed'
    }
}, {});

User.prototype.isValidPassword = async function(password) {
    const match = await bcrypt.compare(password, this.password);
    return match;
}

module.exports = User;