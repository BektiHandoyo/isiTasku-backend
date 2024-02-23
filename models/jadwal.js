'use strict';
const {DataTypes} = require('sequelize');
const db = require('../config/Databse.js');

const jadwal = db.define('Jadwals', {
    hari : DataTypes.STRING,
    kelas: DataTypes.INTEGER,
    jurusan: DataTypes.STRING,
    giliran : DataTypes.ENUM(['na', 'kejuruan']),
    indeks: DataTypes.STRING,
    jadwal: DataTypes.JSON,
});

module.exports = jadwal;