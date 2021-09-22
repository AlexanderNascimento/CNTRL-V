const Sequelize = require('sequelize');
const connection = require('../Connection');

const TB04_DEPENDENTS = connection.define('TB04_DEPENDENTS', {
    tb04_Id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tb04_Responsible:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    tb04_Dependent:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = TB04_DEPENDENTS;