/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('orders', [{
      title: "Long name order longest name",
      description: "desc",
      date: new Date(),
    },{
      title: "Order 2",
      description: "desc",
      date: new Date(),
    },{
      title: "Long order name order 3",
      description: "desc",
      date: new Date(),
    },
  ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('orders', null, {});
  },
};
