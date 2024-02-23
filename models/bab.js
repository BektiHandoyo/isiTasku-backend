'use strict';
const { DataTypes } = require('sequelize');
const db = require('../config/Databse.js');
const buku = require('./buku.js');

const bab = db.define('Babs', {
    id_buku : {
      type : DataTypes.INTEGER,
      references : {
        model  : buku,
        key : "id"
      }
    },
    indeks: DataTypes.INTEGER,
    halaman: DataTypes.STRING,
    judul: DataTypes.STRING
});


module.exports = bab ;