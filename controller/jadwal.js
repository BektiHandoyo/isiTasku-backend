const jadwal = require('../models/jadwal.js');
const dotenv = require('dotenv');
const _ = require('lodash');
dotenv.config();

const getJadwalToday = async (req, res) => {
    const {hari, kelas, jurusan, indeks} = req.params;

    const giliran = process.env.GILIRAN;
    
    let jadwalMingguIni;
    try {
    
        if(giliran == "genap"){
            if(indeks % 2 == 0){
                jadwalMingguIni = "kejuruan"
            } else {
                jadwalMingguIni = "na"
            }
        } else {
            if(indeks % 2 == 0){
                jadwalMingguIni = "na"
            } else {
                jadwalMingguIni = "kejuruan"
            }
        }
    
        const jadwalSiswa = await jadwal.findOne({
            where : {
                hari : _.capitalize(hari),
                kelas : kelas,
                jurusan : jurusan.toUpperCase(),
                indeks : indeks,
                giliran : jadwalMingguIni
            }
        }) 
    
        if(jadwalSiswa == null){
            return res.status(404).json({massage : "Jadwal Tidak ditemukan"})
        }
    
        if(typeof jadwalSiswa.dataValues["jadwal"] != 'object' ){
            jadwalSiswa.dataValues["jadwal"] = JSON.parse(jadwalSiswa.dataValues["jadwal"]) 
        }

        res.json(jadwalSiswa);
    } catch (error) {
        res.status(500).json({massage : "Internal Server Error"})
        console.log(error);
    }
}

const getJadwalByAngakatan = async (req, res) => {
    const {kelas, jurusan, indeks} = req.params
    const giliran = process.env.GILIRAN;
    
    let jadwalMingguIni;
    try {
        if(giliran == "genap"){
            if(indeks % 2 == 0){
                jadwalMingguIni = "kejuruan"
            } else {
                jadwalMingguIni = "na"
            }
        } else {
            if(indeks % 2 == 0){
                jadwalMingguIni = "na"
            } else {
                jadwalMingguIni = "kejuruan"
            }
        }
    
        const jadwalSiswa = await jadwal.findAll({
            where : {
                kelas : kelas,
                jurusan : jurusan.toUpperCase(),
                indeks : indeks,
                giliran : jadwalMingguIni
            }
        }) 
    
        if(jadwalSiswa == null){
            return res.status(404).json({massage : "Jadwal Tidak ditemukan"})
        }
        
        for(let jadwalString of jadwalSiswa ){
            if(typeof jadwalString.dataValues["jadwal"] != 'object'){
                jadwalString.dataValues["jadwal"] = JSON.parse(jadwalString.dataValues["jadwal"])        
            }
        }
    
        res.json(jadwalSiswa);
    } catch (error) {
        res.status(500).json({massage : "Internal Server Error"})
        console.log(error);
    }
}

module.exports = {
    getJadwalToday, 
    getJadwalByAngakatan
}