/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      serialNumber: {
        type: Sequelize.STRING,
        field: 'serial_number',
      },
      isNew: {
        type: Sequelize.INTEGER,
        field: 'is_new',
      },
      photo: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      specification: {
        type: Sequelize.STRING,
      },
      guarantee: {
        type: Sequelize.JSONB,
      },
      price: {
        type: Sequelize.JSONB,
      },
      order: {
        type: Sequelize.INTEGER,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  },
};
