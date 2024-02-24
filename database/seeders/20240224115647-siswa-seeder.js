'use strict';

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
   await queryInterface.bulkInsert('Siswa', [
      {
        nis : 224118615,
        nama : 'Subekti Suryo Handoyo',
        kelas : 11,
        jurusan : "SIJA",
        indeks : 1,
        password : 224118615,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nis : 224118587,
        nama : 'Arbian Indra Musafak',
        kelas : 11,
        jurusan : "SIJA",
        indeks : 1,
        password : 224118587,
        createdAt : new Date(),
        updatedAt : new Date()
      }, 
      {
        nis : 224118590,
        nama : 'Claribel Sefira',
        kelas : 11,
        jurusan : "SIJA",
        indeks : 1,
        password : 224118590,
        createdAt : new Date(),
        updatedAt : new Date()
      }, 
      {
        nis : 224118603,
        nama : 'Muhammad Nafiis Fawwaz Al Farisi',
        kelas : 11,
        jurusan : "SIJA",
        indeks : 1,
        password : 224118603,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nis : 224118614,
        nama : 'Silvia Marta Kirana',
        kelas : 11,
        jurusan : "SIJA",
        indeks : 1,
        password : 224118614,
        createdAt : new Date(),
        updatedAt : new Date()        
      }
    ])
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
