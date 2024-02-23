'use strict';
const {DataTypes} = require('sequelize');
const db = require('../config/Databse.js');

const kategori = db.define("Kategoris",{
  kategori:  DataTypes.STRING
});

module.exports = kategori;