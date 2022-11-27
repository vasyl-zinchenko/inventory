import express from 'express';
import cors from 'cors';
import { router as orderRouter } from './routes/orders.js';
import { router as productRouter } from './routes/products.js';

export function createServer() {
  const app = express();

  app.use(express.static('./src'));
  app.use(cors());
  app.use(express.json());

  app.use('/orders', orderRouter);
  app.use('/products', productRouter);

  app.get('/', (req, res) => {
    res.send('Hi');
  });

  return app;
}

