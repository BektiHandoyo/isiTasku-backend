'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Babs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      indeks: {
        type: Sequelize.INTEGER
      },
      id_buku: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Bukus',
          key : 'id',
          as : 'id_buku'
        }
      },
      halaman: {
        type: Sequelize.STRING
      },
      judul: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Babs');
  }
};