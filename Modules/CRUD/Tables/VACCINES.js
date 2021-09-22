const Sequelize = require('sequelize');
const connection = require('../Connection');

const TB02_VACCINE = connection.define('TB02_VACCINE', {
    tb02_IdRegister: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tb02_IdVaccine: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    tb02_Name: {
        type: Sequelize.STRING,
    },
    tb02_Description: {
        type: Sequelize.STRING,
    },
    tb02_Dose: {
        type: Sequelize.INTEGER,
    },
    tb02_Age: {
        type: Sequelize.INTEGER,
    },
    tb02_Classification: {
        type: Sequelize.INTEGER,
    }
});

module.exports = TB02_VACCINE;