const Siswa = require('./models/siswa.js')
const {DataTypes} = require('sequelize');
const db = require('./config/Databse.js');


const siswaController = Siswa(db, DataTypes);

async function get(){
    const siswa = await siswaController.findOne();

    console.log(siswa.dataValues);
} 

get()
