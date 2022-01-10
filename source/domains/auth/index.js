// Core
import express from 'express';

// Instruments
import { limiter } from '../middlewares';

// Handlers
import * as authenticate from './router.handlers';

const route = express.Router();
const timeout = 1 * 60 * 1000; // 1 min

route.post('/auth/login', [limiter(10, timeout)], authenticate.login);

export { route as guardian };
