const Sequelize = require('sequelize');
const connection = require('../Connection');

const TB01_USER = connection.define('TB01_USER', {
    tb01_Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tb01_Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tb01_LastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tb01_IdSus:{
        type: Sequelize.STRING,
        allowNull: false
    },
    tb01_Email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tb01_Password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tb01_Genrer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tb01_Byrthday: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = TB01_USER;