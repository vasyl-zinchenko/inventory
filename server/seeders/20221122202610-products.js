/* eslint-disable max-len */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [
      {
        is_new: 0,
        serial_number: '234539003',
        photo: 'pathToFile.jpg',
        title: 'Product 1',
        type: 'Monitors',
        specification: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 x58-USB3',
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
        order: 5,
        date: new Date(),
      },
      {
        is_new: 1,
        serial_number: '234539003',
        photo: 'pathToFile.jpg',
        title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 x58-USB3',
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
        order: 5,
        date: new Date(),
      },
      {
        is_new: 0,
        serial_number: '234539003',
        photo: 'pathToFile.jpg',
        title: 'Product 1',
        type: 'Monitors',
        specification: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 x58-USB3',
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
        order: 5,
        date: new Date(),
      },
      {
        is_new: 0,
        serial_number: '234539003',
        photo: 'pathToFile.jpg',
        title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 x58-USB3',
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
        order: 6,
        date: new Date(),
      },
      {
        is_new: 1,
        serial_number: '234539003',
        photo: 'pathToFile.jpg',
        title: 'Product 1',
        type: 'Monitors',
        specification: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 x58-USB3',
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
        order: 6,
        date: new Date(),
      },
      {
        is_new: 0,
        serial_number: '234539003',
        photo: 'pathToFile.jpg',
        title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 x58-USB3',
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
        order: 7,
        date: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products', null, {});
  },
};
