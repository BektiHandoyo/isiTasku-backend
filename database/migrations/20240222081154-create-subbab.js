'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Subbabs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      indeks: {
        type: Sequelize.INTEGER
      },
      id_bab: {
        type: Sequelize.INTEGER,
        references : {
          model : "Babs",
          key : "id",
          as : "id_bab"
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
    await queryInterface.dropTable('Subbabs');
  }
};