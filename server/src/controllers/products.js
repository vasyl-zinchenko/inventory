import * as productService from '../services/products.js';

export const getAll = async(req, res) => {
  const products = await productService.getAll();

  res.send(products);
};
