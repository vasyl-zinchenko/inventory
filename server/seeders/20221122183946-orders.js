/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('orders', [{
      title: "Order 1",
      description: "desc",
      date: new Date(),
    },{
      title: "Order 2",
      description: "desc",
      date: new Date(),
    },{
      title: "Order 3",
      description: "desc",
      date: new Date(),
    },
  ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('orders', null, {});
  },
};
