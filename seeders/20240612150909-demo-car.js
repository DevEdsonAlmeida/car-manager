'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cars', [
      {
        make: 'Toyota',
        model: 'Corolla',
        year: 2022,
        ownerId: 1,  // Supondo que o id do proprietário "João Silva" é 1
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        make: 'Honda',
        model: 'Civic',
        year: 2021,
        ownerId: 2,  // Supondo que o id do proprietário "Maria Oliveira" é 2
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};
