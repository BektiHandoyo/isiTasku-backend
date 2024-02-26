'use strict';

const daftarIsiBukuMatematika = require('../../data/daftar-isi/matematika-11.json');
const daftarIsiBukuIndonesia = require('../../data/daftar-isi/bahasa-indonesia-11.json');
const daftarIsiAgamaIslam = require('../../data/daftar-isi/agama-islam-11.json');
const daftarIsiAgamaKristen = require('../../data/daftar-isi/agama-kristen-11.json')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
    */
    
    try {
        await queryInterface.bulkInsert('Buku', [
          {
            judul : "Buku Bahasa Indonesia SMA/SMK Kelas 11 Kurikulum 2021",
            kelas : 11,
            mapel : "Bahasa Indonesia",
            url_buku : "https://drive.google.com/file/d/1KZIFN4hlEocd35bhECAQZ-FVb5LPoP_4/view?usp=drive_link",
            url_cover : "https://drive.google.com/file/d/1PdkoqaZbklFDrClzwqsAlhZIG4-z1Gpn/view?usp=drive_link",
            daftar_isi : JSON.stringify(daftarIsiBukuIndonesia),
            createdAt : new Date(),
            updatedAt : new Date()
          },
          {
            judul : "Buku Matematika SMA/SMK Kelas 11 Kurikulum 2021",
            kelas : 11,
            mapel : "Matematika",
            url_buku : "https://drive.google.com/file/d/1KWu-rKlin6NspDP8C_plXHz6D5ilHU5B/view?usp=drive_link",
            url_cover : "https://drive.google.com/file/d/1QACvCKWoLm4g60p2mUFHToBBYn7R72z8/view?usp=drive_link",
            daftar_isi : JSON.stringify(daftarIsiBukuMatematika),
            createdAt : new Date(),
            updatedAt : new Date()
          },
          {
            judul : "Buku Agama Islam SMA/SMK Kelas 11 Kurikulum 2021",
            kelas : 11,
            mapel : "Agama Islam",
            url_buku : "https://drive.google.com/file/d/1K_uOZ3EfSEbwLVfArytq6N_X6VPe2YaJ/view?usp=drive_link",
            url_cover : "https://drive.google.com/file/d/1PifUVgoMtlBrQjfMevons5wG3nJFuuvf/view?usp=drive_link",
            daftar_isi : JSON.stringify(daftarIsiAgamaIslam),
            createdAt : new Date(),
            updatedAt : new Date()
          },
          {
            judul : "Buku Agama Kristen SMA/SMK Kelas 11 Kurikulum 2021",
            kelas : 11,
            mapel : "Agama Kristen",
            url_buku : "https://drive.google.com/file/d/1KclcRkU10h63EDTdHDggyn2y1XNkym7E/view?usp=drive_link",
            url_cover : "https://drive.google.com/file/d/1Pt_a4mJoLAD_0ZvfiYX-3fmm4EMoLrcE/view?usp=drive_link",
            daftar_isi : JSON.stringify(daftarIsiAgamaKristen),
            createdAt : new Date(),
            updatedAt : new Date()
          }
        ]
      )
    } catch (error) {
      console.log(error); 
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
