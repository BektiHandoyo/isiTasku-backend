const buku = require('../models/buku.js');
const _ = require('lodash');
const jadwal = require('../models/jadwal.js')
const dotenv = require('dotenv');
dotenv.config();

const daftarMataPelajaran = {
    "bahasa-inggris" : "Bahasa Inggris",
    "bahasa-indonesia" : "Bahasa Indonesia", 
    "bahasa-jawa" : "Bahasa Jawa", 
    "pkk" : "PKK",
    "ppkn" : "PPKN",
    "matematika" : "Matematika",
    "agama-islam" : "Agama Islam",
    "agama-kristen" : "Agama Kristen",
    "penjas" : "Penjas",
    "sejarah" : "Sejarah" 
}

const mapelFormatting = (namaMapel) => {
    let mapel = namaMapel.split("-");
    let kelas = mapel[mapel.length - 1];
    mapel = mapel.slice(0, mapel.indexOf(kelas));
    return {
        mapel : daftarMataPelajaran[mapel.join("-")],
        kelas
    }
}


const getBukuByMapel = async (req, res) => {
    let {mapel, kelas} = mapelFormatting(req.params.mapel.toLowerCase());
    
    try {
        const daftarBuku = await buku.findAll({
            where : {
                mapel : mapel,
                kelas : kelas,
            },
            attributes : ['id', 'judul', 'kelas', 'mapel', 'url_buku', 'url_cover'] 
        })
    
        res.json(daftarBuku);
    } catch (error) {
        console.log(error);
        res.send("Error")
    }
}

const getBukuById = async (req, res) => {
    const {id} = req.params;

    try {
        const daftarBuku = await buku.findAll({
            where : { id : id },

        })

        for(let buku of daftarBuku){
            if(typeof buku !== 'object'){
                buku.dataValues["daftar_isi"] = JSON.parse(buku.dataValues["daftar_isi"]); 
            }
        }
    
        res.json(daftarBuku);
    } catch (error) {
        console.log(error);
        res.send("Error")
    }
}

const getBukuByAngkatan = async (req, res) => {
    const {kelas} = req.params

    try {
        const daftarBukuSiswa = await buku.findAll({
            where : {
                kelas : kelas
            },
            attributes: ['id', 'judul', 'kelas', 'mapel', 'url_buku', 'url_cover']
        }) 
    
        if(daftarBukuSiswa == null){
            return res.status(404).json({massage : "Jadwal Tidak ditemukan"})
        } 
    
        res.json(daftarBukuSiswa);
    } catch (error) {
        res.status(500).json({massage : "Internal Server Error"})
        console.log(error);
    }
}

const getDaftarBukuByJadwalHari = async (req, res) => {
    const {hari, kelas, indeks, jurusan} = req.params;

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
                kelas : kelas,
                hari : _.capitalize(hari),
                jurusan : jurusan.toUpperCase(),
                indeks : indeks,
                giliran : jadwalMingguIni
            },
            attributes : ["jadwal"]
        }) 

        const daftarJadwal = [];
        
        for(let jamJadwal in jadwalSiswa.dataValues.jadwal){
            daftarJadwal.push(jadwalSiswa.dataValues.jadwal[jamJadwal]);
        }

        const bukuHariIni = [];

        for(let jadwalHariIni of daftarJadwal){
            
            if(["Upacara Bendera", "Istirahat", "Istirahat Sholat Makan", "Bakti Kampus"].includes(jadwalHariIni)){
                continue;
            }

            const bukuDariJadwal = await buku.findOne({
                where : {
                    mapel : jadwalHariIni
                },
                attributes : ['id', 'judul', 'kelas', 'mapel', 'url_buku', 'url_cover']
            });

            if(bukuDariJadwal == null || bukuDariJadwal == {}){
                continue;
            }

            bukuHariIni.push(bukuDariJadwal.dataValues);
        }

        res.json(bukuHariIni);

    } catch (error) {
        res.send("error")
        console.log(error);        
    }
}

module.exports = {getBukuByMapel, getBukuById, getBukuByAngkatan, getDaftarBukuByJadwalHari}