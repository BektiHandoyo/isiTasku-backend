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
    const categories = ["kesiswaan", "kebersihan", "keamanan", "fasilitas", "testing"];
    for(let category of categories){
      await queryInterface.bulkInsert('Kategori',[{
        kategori : category,
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
