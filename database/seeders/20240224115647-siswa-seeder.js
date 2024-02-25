'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      const salt = await bcrypt.genSalt();
      /**
       * Add seed commands here.
       *
       * Example:
       * await queryInterface.bulkInsert('People', [{
       *   name: 'John Doe',
       *   isBetaMember: false
       * }], {});
      */
      
      console.log(salt);

      const passwords = [224118615, 224118587, 224118590, 224118590, 224118614, 224118387]
  
      for(let i in passwords){
        console.log((passwords[i]));
        passwords[i] = await bcrypt.hash(passwords[i].toString(), salt);
      }
  
     await queryInterface.bulkInsert('Siswa', [
        {
          nis : 224118615,
          nama : 'Subekti Suryo',
          kelas : 11,
          jurusan : "SIJA",
          indeks : 1,
          password : passwords[0],
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          nis : 224118587,
          nama : 'Arbian Indra Musafak',
          kelas : 11,
          jurusan : "SIJA",
          indeks : 1,
          password : passwords[1],
          createdAt : new Date(),
          updatedAt : new Date()
        }, 
        {
          nis : 224118590,
          nama : 'Claribel Sefira',
          kelas : 11,
          jurusan : "SIJA",
          indeks : 1,
          password : passwords[2],
          createdAt : new Date(),
          updatedAt : new Date()
        }, 
        {
          nis : 224118603,
          nama : 'Muhammad Nafiis Fawwaz Al Farisi',
          kelas : 11,
          jurusan : "SIJA",
          indeks : 1,
          password : passwords[3],
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          nis : 224118614,
          nama : 'Silvia Marta Kirana',
          kelas : 11,
          jurusan : "SIJA",
          indeks : 1,
          password : passwords[4],
          createdAt : new Date(),
          updatedAt : new Date()        
        }, 
        {
            nis : 224118387,
            nama : 'Farid',
            kelas : 11,
            jurusan : "KJIJ",
            indeks : 1,
            password : passwords[5],
            createdAt : new Date(),
            updatedAt : new Date()
        }
      ])
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
