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
