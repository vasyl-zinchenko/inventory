import express from 'express';
import * as orderController from '../controllers/orders.js';

export const router = express.Router();

router.get('/', orderController.getAll);

router.get('/:orderId', orderController.getOne);

router.post('/', orderController.add);

router.delete('/:orderId', orderController.remove);
