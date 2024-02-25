'use strict';
const { DataTypes } = require('sequelize');
const db = require('../config/Databse.js');
const siswa = require('./siswa.js');

const laporan = db.define('Laporan',{
    desc: DataTypes.TEXT,
    user_id : {
      type : DataTypes.INTEGER,
      references : {
        model : siswa,
        key : "nis"
      }
    },
    kategori : DataTypes.STRING
}, {
  freezeTableName : true
});

module.exports = laporan;