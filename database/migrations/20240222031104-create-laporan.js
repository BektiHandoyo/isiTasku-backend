'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Laporans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      desc: {
        type: Sequelize.STRING
      },
      kategori: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Kategoris',
          key : 'id', 
          as : 'kategori'
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Siswas', 
          key : 'nis',
          as : 'user_id'
        }
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
    await queryInterface.dropTable('Laporans');
  }
};
