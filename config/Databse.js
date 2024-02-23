const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');
dotenv.config()
const config = require('./config.js')[process.env.NODE_ENV];

const db = new Sequelize({
    username : config.username,
    password : config.password,
    host : config.host,
    dialect : config.dialect,
    database : config.database
})

// console.log(db);

module.exports = db;