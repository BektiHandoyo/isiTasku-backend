'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Siswa', {
      nis: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER({
          length : 9
        })
      },
      nama: {
        type: Sequelize.STRING(64)
      },
      kelas: {
        type: Sequelize.INTEGER({
          length : 2
        })
      },
      jurusan: {
        type: Sequelize.STRING(16)
      },
      indeks: {
        type: Sequelize.INTEGER({
          length : 1
        })
      },
      password: {
        type: Sequelize.STRING(225)
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
    await queryInterface.dropTable('Siswas');
  }
};