const Sequelize = require('sequelize');
const connection = require('../Connection');

const TB03_VACCINATIONCARD = connection.define('TB03_VACCINATIONCARD', {
    tb03_VaccinationCardId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tb03_IdUser:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    tb03_IdVaccine:{
        type: Sequelize.INTEGER, 
        allowNull: false,
    },
    tb03_Lote:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    tb03_Date:{
        type: Sequelize.STRING,
        allowNull: true,
    },
});
connection.sync();
module.exports = TB03_VACCINATIONCARD;