'use strict';

/** @type {import('sequelize-cli').Migration} */
export default  {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('tareas', [
            {
                nombre: 'Aprender Sequelize',
                completada: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nombre: 'Crear API REST',
                completada: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nombre: 'Desplegar aplicación',
                completada: false,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('tareas', null, {});
    }
};
