'use strict';

const daftarIsiBukuPPKN = require('../../data/daftar-isi/ppkn-11.json') 

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
        await queryInterface.bulkInsert('Buku', [{
            judul : "Buku Pendidikan Pancasila dan Kewarganegaraan SMA/SMK Kelas 11 Kurikulum 2021",
            kelas : 11,
            mapel : "PPKN",
            url_buku  : "https://drive.google.com/file/d/1KXLJtEggMn190-fpOh4YIZxJJMb9nS0k/view?usp=drive_link",
            daftar_isi : JSON.stringify(daftarIsiBukuPPKN),
            createdAt : new Date(),
            updatedAt : new Date()
          }]
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
