'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Tareas', [{
        nombre: 'Tarea Nueva',
        completada: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Poner atencion en clases',
        completada: true,
        createdAt: new Date(),
        updatedAt: new Date(),

      }

    ], {});
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
