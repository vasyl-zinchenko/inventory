import { Products } from '../models/products.js';

export async function getAll() {
  return Products.findAll();
}

export function getById(productId) {
  return Products.findByPk(productId);
}

export function createProduct(
  title,
  isNew,
  serialNumber,
  photo,
  type,
  specification,
  order,
) {
  const date = new Date();
  const guarantee = ({
    "end": "2017-06-29 12:09:33",
    "start": "2017-06-29 12:09:33",
  });
  const price = ([
    {
      "value": 100, "symbol": "USD", "isDefault": 0,
    },{
      "value": 2600, "symbol": "UAH", "isDefault": 1,
    },
  ]);

  return Products.create({
    title,
    isNew,
    serialNumber,
    photo,
    type,
    specification,
    guarantee,
    price,
    order,
    date,
  });
}

export function removeProduct(productId) {
  return Products.destroy({
    where: { id: productId },
  });
}

// {
//   "id": 1,
//   "title": "Product 1",
//   "isNew": 1,
//   "serialNumber": "234539003",
//   "photo": "pathToFile.jpg",
//   "type": "Monitors",
//   "specification": "Gigabyte Technology X58-USB3 (Socket 1366) 6 x58-USB3",
//   "guarantee": {
//       "end": "2017-06-29 12:09:33",
//       "start": "2017-06-29 12:09:33"
//   },
//   "price": [
//       {
//           "value": 100,
//           "symbol": "USD",
//           "isDefault": 0
//       },
//       {
//           "value": 2600,
//           "symbol": "UAH",
//           "isDefault": 1
//       }
//   ],
//   "order": 10,
//   "date": "2022-11-30T04:22:44.167Z"
// },
