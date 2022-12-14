/* eslint-disable no-console */
import * as productService from '../services/products.js';

export const getAll = async(req, res) => {
  const products = await productService.getAll();

  res.send(products);
};

export const getOne = async(req, res) => {
  const { productId } = req.params;

  const foundProduct = await productService.getById(productId);

  if (!foundProduct) {
    res.sendStatus(404);

    return;
  }
  res.send(foundProduct);
};

export const add = async(req, res) => {
  const {
    title,
    serialNumber,
    isNew,
    photo,
    type,
    specification,
    order,
  } = req.body;

  try {
    const newProduct = await productService
    .createProduct(
      title,
      serialNumber,
      isNew,
      photo,
      type,
      specification,
      order,
    );

    res.statusCode = 201;
    res.send(newProduct);

  } catch (error) {
    console.log(error);
  }
};

export const remove = async(req, res) => {
  const { productId } = req.params;
  const foundProduct = await productService.getById(productId);

  if (!foundProduct) {
    res.sendStatus(404);

    return;
  }

  productService.removeProduct(productId);
  res.sendStatus(200);
};
