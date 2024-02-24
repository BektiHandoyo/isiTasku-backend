'use strict';
const jadwalNA11KJIJ1 = require('../../data/jadwal-pelajaran/xi-KJIJ-1/na.json');
const jadwalNA11SIJA1 = require('../../data/jadwal-pelajaran/xi-sija-1/na.json');

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
    */
    for(let isijadwal of jadwalNA11KJIJ1){
      await queryInterface.bulkInsert('Jadwal', [{
          hari : isijadwal.hari,
          kelas : 11,
          jurusan : "KJIJ",
          indeks : 1,
          giliran : "na",
          jadwal : JSON.stringify(isijadwal.jadwal),
          createdAt : new Date(),
          updatedAt : new Date()            
      }])
    }

    for(let isijadwal of jadwalNA11SIJA1){
      await queryInterface.bulkInsert('Jadwal', [{
          hari : isijadwal.hari,
          kelas : 11,
          jurusan : "KJIJ",
          indeks : 1,
          giliran : "na",
          jadwal : JSON.stringify(isijadwal.jadwal),           
          createdAt : new Date(),
          updatedAt : new Date()  
      }])
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
