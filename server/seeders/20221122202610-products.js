/* eslint-disable max-len */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [
      {
        serialNumber: 1234,
        isNew: 1,
        photo: 'pathToFile.jpg',
        title: 'Product 1',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: JSON.stringify({
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        }),
        price: JSON.stringify([
          {
            value: 100, symbol: "USD", isDefault: 0,
          },{
            value: 2600, symbol: "UAH", isDefault: 1,
          },
        ]),
        order: 1,
        date: new Date(),
      },
      {
        serialNumber: 1234,
        isNew: 1,
        photo: 'pathToFile.jpg',
        title: 'Product 1',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: JSON.stringify({
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        }),
        price: JSON.stringify([
          {
            value: 100, symbol: "USD", isDefault: 0,
          },{
            value: 2600, symbol: "UAH", isDefault: 1,
          },
        ]),
        order: 2,
        date: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products', null, {});
  },
};
