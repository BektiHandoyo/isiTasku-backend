'use strict';
const { DataTypes } = require('sequelize');
const db = require('../config/Databse.js');
const siswa = require('./siswa.js');
const kategori = require('./kategori.js');

const laporan = db.define('Laporans',{
    desc: DataTypes.STRING,
    user_id : {
      type : DataTypes.INTEGER,
      references : {
        model : siswa,
        key : "nis"
      }
    },
    kategori : {
      type : DataTypes.INTEGER,
      references : {
        model  : kategori,
        key : "id"
      }
    }
});

module.exports = laporan;