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
      },
      isNew: {
        type: Sequelize.INTEGER,
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
