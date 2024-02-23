'use strict';
const {DataTypes} = require('sequelize');
const db = require('../config/Databse.js');

const buku = db.define('Bukus', {
    kelas: DataTypes.INTEGER,
    mapel: DataTypes.STRING,
    url_buku: DataTypes.STRING
});

module.exports = buku ; 