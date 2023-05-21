/** @type {import('sequelize-cli').Migration} */
const bccripty = require('bcryptjs');
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      nome: 'Bruna',
      email: 'bruna@hotmail.com',
      password_hash: await bccripty.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      nome: 'Bruna1',
      email: 'bruna1@hotmail.com',
      password_hash: await bccripty.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      nome: 'Bruna2',
      email: 'bruna2@hotmail.com',
      password_hash: await bccripty.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down() {
  },
};
