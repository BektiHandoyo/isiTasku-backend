'use strict';
const {DataTypes} = require('sequelize');
const db = require('../config/Databse.js');

const jadwal = db.define('Jadwal', {
    hari : DataTypes.STRING,
    kelas: DataTypes.INTEGER,
    jurusan: DataTypes.STRING,
    giliran : DataTypes.ENUM(['na', 'kejuruan']),
    indeks: DataTypes.STRING,
    jadwal: DataTypes.JSON,
}, {
    freezeTableName : true
});

module.exports = jadwal;