import * as orderService from '../services/orders.js';

export const getAll = async(req, res) => {
  const orders = await orderService.getAll();

  res.send(orders);
};

export const getOne = async(req, res) => {
  const { orderId } = req.params;

  const foundOrder = await orderService.getById(orderId);

  if (!foundOrder) {
    res.sendStatus(404);

    return;
  }
  res.send(foundOrder);
};

export const add = async(req, res) => {
  const { name } = req.body;

  if (!name) {
    res.sendStatus(400);

    return;
  }

  const newOrder = await orderService.createOrder(name);

  res.statusCode = 201;
  res.send(newOrder);
};

export const remove = async(req, res) => {
  const { orderId } = req.params;
  const foundOrder = await orderService.getOrderById(orderId);

  if (!foundOrder) {
    res.sendStatus(404);

    return;
  }

  orderService.removeOrder(orderId);
  res.sendStatus(204);
};
