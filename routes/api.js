const express = require('express')
const {getBukuByMapel, getBukuById, getBukuByAngkatan} = require('../controller/buku.js');
const { getJadwalToday, getJadwalByAngakatan } = require('../controller/jadwal.js');

const router = express.Router();

router.get('/api/buku/mapel/:mapel', getBukuByMapel);
router.get('/api/buku/:id', getBukuById);
router.get('/api/buku/kelas/:kelas', getBukuByAngkatan);

router.get('/api/jadwal/:hari/:kelas/:jurusan/:indeks', getJadwalToday);
router.get('/api/jadwal/:kelas/:jurusan/:indeks', getJadwalByAngakatan);

module.exports = router;