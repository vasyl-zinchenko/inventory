import { Orders } from '../models/orders.js';

export async function getAll() {
  return Orders.findAll();
};

export function getById(orderId) {
  return Orders.findByPk(orderId);
}

export function createOrder(title) {
  const date = new Date();
  const description = "description";

  return Orders.create({
    title, description, date,
  });
}

export function removeOrder(orderId) {
  return Orders.destroy({
    where: { id: orderId },
  });
};
