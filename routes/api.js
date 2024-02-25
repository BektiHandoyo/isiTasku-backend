const express = require('express')
const {getBukuByMapel, getBukuById, getBukuByAngkatan} = require('../controller/buku.js');
const { getJadwalToday, getJadwalByAngakatan } = require('../controller/jadwal.js');
const { login } = require('../controller/siswa.js');
const { getNewestLaporan, uploadLaporan, getAllCategories, deleteLaporanById, getLaporanDetail, getLaporanBySiswaId } = require('../controller/laporan.js');

const router = express.Router();

router.get('/api/buku/mapel/:mapel', getBukuByMapel);
router.get('/api/buku/:id', getBukuById);
router.get('/api/buku/kelas/:kelas', getBukuByAngkatan);

router.get('/api/jadwal/:hari/:kelas/:jurusan/:indeks', getJadwalToday);
router.get('/api/jadwal/:kelas/:jurusan/:indeks', getJadwalByAngakatan);

router.post('/api/siswa/login', login);

router.get('/api/kategori',getAllCategories);
router.get('/api/laporan', getNewestLaporan);
router.get('/api/laporan/:id', getLaporanDetail)
router.get('/api/laporan/siswa/:id_siswa', getLaporanBySiswaId);
router.post('/api/laporan', uploadLaporan);
router.delete('/api/laporan/:id', deleteLaporanById)

module.exports = router;