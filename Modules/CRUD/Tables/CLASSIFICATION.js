const Sequelize = require('sequelize');
const connection = require('../Connection');

const TB05_CLASSIFICATION = connection.define('TB05_CLASSIFICATION', {
    tb05_Id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tb06_Description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    tb06_Color:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = TB05_CLASSIFICATION;