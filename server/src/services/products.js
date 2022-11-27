import { Products } from '../models/products.js';

export async function getAll() {
  return Products.findAll();
};
