'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Buku', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      judul : {
        type : Sequelize.STRING(225)
      },
      kelas: {
        type: Sequelize.INTEGER(2)
      },
      mapel: {
        type: Sequelize.STRING(64)
      },
      url_buku: {
        type: Sequelize.STRING(225)
      },
      url_cover : {
        type : Sequelize.STRING(225)
      },
      daftar_isi : {
        type : Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Buku');
  }
};