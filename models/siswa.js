'use strict';
const {
  DataTypes
} = require('sequelize');
const db = require('../config/Databse.js');

const siswa = db.define('Siswas', {
    nis:{
      type : DataTypes.NUMBER,
      primaryKey : true 
    },
    nama: DataTypes.STRING,
    kelas: DataTypes.NUMBER,
    jurusan: DataTypes.STRING,
    indeks: DataTypes.NUMBER,
    password: DataTypes.STRING
});

module.exports = siswa;