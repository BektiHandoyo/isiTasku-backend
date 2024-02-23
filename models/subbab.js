'use strict';
const {
  DataTypes
} = require('sequelize');
const db = require('../config/Databse.js');
const bab = require('./bab.js');

const subab = db.define('Subbabs' , {
    indeks: DataTypes.INTEGER,
    halaman: DataTypes.STRING,
    judul: DataTypes.STRING,
    id_bab : {
      type : DataTypes.INTEGER,
      references : {
        model : bab,
        key : "id"
      }
    }
});

module.exports = subab ;