// 'use strict';

const fs = require('fs');
const path = require('path');
// const Sequelize = require('sequelize');
// const  db = require('../config/Databse.js')
// const process = require('process');
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.js')[env];
const listOfModels = [];

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    listOfModels.push(model);
});

// console.log(listOfModels);
module.exports = listOfModels