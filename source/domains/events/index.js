// Core
import express from 'express';

// Instruments
import { authenticate, limiter } from '../middlewares';

// Handlers
import * as events from './router.handlers';

const route = express.Router();
const timeout = 1 * 60 * 1000; // 1 min

route.get('/events', [limiter(10, timeout), authenticate], events.get);
route.post('/events', [limiter(10, timeout), authenticate], events.post);
route.put('/events/:eventId', [limiter(10, timeout), authenticate], events.put);
route.delete('/events/:eventId', [limiter(10, timeout), authenticate], events.remove);

export { route as events };
