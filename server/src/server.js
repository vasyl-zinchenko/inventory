/* eslint-disable no-console */
import dotenv from 'dotenv';
import { createServer } from './createServer.js';

dotenv.config();

const port = process.env.PORT || 3000;

createServer().listen(port, () => {
  console.log(`⚡️ Server is running at http://localhost:${port}`);
});
