const laporan = require('../models/laporan.js');
const kategori = require('../models/kategori.js');
const { default: base64 } = require('base64url');

const getNewestLaporan = async (req, res) => {
    try {
        const laporans = await laporan.findAll({
            order : [['createdAt', 'ASC']],
        })

        if(laporans.length == 0) {
            return res.status(404).json({message : "Belum ada Postingan"});
        }

        const response = [];

        for(let laporan of laporans){
            const categories = laporan.dataValues.kategori.split(",");
            laporan.dataValues.kategori = [];
            for(let category of categories ){
                const kategoriSaatIni = await kategori.findOne({
                    where : {id : category}
                });
                laporan.dataValues.kategori.push(kategoriSaatIni.dataValues);
            }
            response.push(laporan);
        }

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message : "Internal Server Error"});  
        console.log(error);      
    }
} 

const getLaporanBySiswaId = async (req, res) => {
    const {id_siswa} = req.params;

    try {
        const laporans = await laporan.findAll({
            where : {
                user_id : id_siswa
            },
            order : [['createdAt', 'ASC']],
        })

        if(laporans.length == 0) {
            return res.status(404).json({message : "Belum ada Postingan"});
        }

        const response = [];

        for(let laporan of laporans){
            const categories = laporan.dataValues.kategori.split(",");
            laporan.dataValues.kategori = [];
            for(let category of categories ){
                const kategoriSaatIni = await kategori.findOne({
                    where : {id : category}
                });
                laporan.dataValues.kategori.push(kategoriSaatIni.dataValues);
            }
            response.push(laporan);
        }

        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal Server Error", error : error.message});
    }
}

const uploadLaporan = async (req, res) => {
    const {desc, id_siswa, kategori} = req.body;

    try {
        await laporan.create({
            desc,
            user_id : id_siswa,
            kategori : kategori.toString(),
            createdAt : new Date(),
            updatedAt : new Date()
        })

        res.status(201).json({message : "Upload Postingan Berhasil"})
    } catch (error) {
        res.status(500).json({message : "Upload Postingan Gagal", error : error.message})
    }
}

const getAllCategories = async (req, res) => {
    const categories = await kategori.findAll();
    res.json(categories);
}

const getLaporanByCategories = async (req, res) => {
    const kategoriLaporan = req.params.kategori

    const laporans = await laporan.findAll({
        order : [['createdAt', 'ASC']],
    })

    if(laporans.length == 0) {
        return res.status(404).json({message : "Belum ada Postingan"});
    }

    const posts = [];

    
    for(let laporan of laporans){
        const categories = laporan.dataValues.kategori.split(",");
        laporan.dataValues.kategori = [];
        for(let category of categories ){
            const kategoriSaatIni = await kategori.findOne({
                where : {id : category}
            });
            laporan.dataValues.kategori.push(kategoriSaatIni.dataValues);
        }
        posts.push(laporan);
    }
    
    const response = []

    for(let post of posts){
        for(let daftarKategori of post.kategori){
            if(daftarKategori.kategori == kategoriLaporan){
                response.push(post);
            }
        }
    }

    res.status(200).json(response);

}

const deleteLaporanById = async (req, res) => {
    const {id} = req.params;

    const {kategori} = req.query;

    try {
        const deletedLaporan = await laporan.findOne({
            where : {
                id : id,
                kategori : kategori
            }
        })

        await deletedLaporan.destroy();

        res.status(200).json({message : "Laporan berhasil dihapus"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Laporan gagal dihapus", error : error.message});
    }


}

const getLaporanDetail = async (req, res) => {
    const {id} = req.params

    const searchedLaporan = await laporan.findOne({ where : { id : id} })

    res.status(200).json(searchedLaporan);
}

module.exports = {
    getNewestLaporan,
    getLaporanBySiswaId,
    uploadLaporan,
    getLaporanByCategories,
    getAllCategories,
    deleteLaporanById,
    getLaporanDetail
}