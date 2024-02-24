"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Jadwal", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      hari: {
        type: Sequelize.STRING,
      },
      kelas: {
        type: Sequelize.INTEGER,
      },
      jurusan: {
        type: Sequelize.STRING,
      },
      indeks: {
        type: Sequelize.STRING,
      },
      giliran : {
        type : Sequelize.ENUM(['na', 'kejuruan'])
      },
      jadwal: {
        type: Sequelize.JSON,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Jadwal");
  },
};
