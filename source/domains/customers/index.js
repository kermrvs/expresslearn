// Core
import express from 'express';

// Instruments
import { authenticate, limiter } from '../middlewares';

// Handlers
import * as customers from './router.handlers';

const route = express.Router();
const timeout = 1 * 60 * 1000; // 1 min

route.get('/customers/profile', [limiter(10, timeout), authenticate], customers.get);
route.post('/customers', [limiter(10, timeout)], customers.post);

export { route as customers };
