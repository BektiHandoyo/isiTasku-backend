const buku = require('../models/buku.js');
const _ = require('lodash');

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
            attributes : ['id', 'judul', 'kelas', 'mapel']
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
            buku.dataValues["daftar_isi"] = JSON.parse(buku.dataValues["daftar_isi"]); 
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
            attributes : ['id', 'judul', 'kelas', 'mapel']
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

module.exports = {getBukuByMapel, getBukuById, getBukuByAngkatan}