import express from 'express';
import * as productController from '../controllers/products.js';

export const router = express.Router();

router.get('/', productController.getAll);

router.get('/:productId', productController.getOne);

router.post('/', productController.add);

router.delete('/:productId', productController.remove);
