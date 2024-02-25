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

const deleteLaporanById = async (req, res) => {
    // /api/laporan/:identifier => base64.encode(id&1,2,3)
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
    uploadLaporan,
    getAllCategories,
    deleteLaporanById,
    getLaporanDetail
}