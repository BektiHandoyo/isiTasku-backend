const bcrypt = require('bcrypt');
const siswa = require('../models/siswa.js');
const { default: base64 } = require('base64url');

const login = async (req, res) => {
    const {nis, password} = req.body;

    try {
        const dataSiswa = await siswa.findOne({
            where : {
                nis : nis
            }
        })

        if(dataSiswa == null || dataSiswa == {}){
            return res.status(404).json({message : "Data tidak ditemukan"});
        }

        const match = await bcrypt.compare(password, dataSiswa.dataValues.password)

        if(match == false) return res.status(404).json({message : "Password Salah"});

        const accessToken = base64.encode(JSON.stringify({
           nama : dataSiswa.dataValues.nama,
           kelas : dataSiswa.dataValues.kelas,
           jurusan : dataSiswa.dataValues.jurusan,
           indeks : dataSiswa.dataValues.indeks,
           password : password
        }))
    
        res.status(200).json({access_token : accessToken});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal Server Error"});
    }
}

module.exports = {
    login
}