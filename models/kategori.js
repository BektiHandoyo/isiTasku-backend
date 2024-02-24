'use strict';
const {DataTypes} = require('sequelize');
const db = require('../config/Databse.js');

const kategori = db.define("Kategori",{
  kategori:  DataTypes.STRING
}, {
  freezeTableName : true,
  timestamps : false
});

module.exports = kategori;