'use strict';
const {DataTypes} = require('sequelize');
const db = require('../config/Databse.js');

const buku = db.define('Buku', {
    judul : DataTypes.STRING,
    kelas: DataTypes.INTEGER,
    mapel: DataTypes.STRING,
    url_buku: DataTypes.STRING,
    url_cover : DataTypes.STRING,
    daftar_isi : DataTypes.JSON
}, {
    freezeTableName : true
});

module.exports = buku ; 