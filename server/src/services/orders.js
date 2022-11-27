import { Orders } from '../models/orders.js';

export async function getAll() {
  return Orders.findAll();
};

export function getById(orderId) {
  return Orders.findByPk(orderId);
}

export function createOrder(name) {
  const id = Number(generateUniqueId({
    length: 8,
    useLetters: false,
  }));

  return Orders.create({
    id, name,
  });
}

export function removeOrder(orderId) {
  return Orders.destroy({
    where: { id: orderId },
  });
};
