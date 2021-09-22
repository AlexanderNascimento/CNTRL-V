const Sequelize = require('sequelize');
const connection = require('../Connection');

const TB06_LOCATION = connection.define('TB06_LOCATION', {
    tb06_locationId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tb06_Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tb05_Address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tb06_Latitude: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    tb06_Longitude: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = TB06_LOCATION;