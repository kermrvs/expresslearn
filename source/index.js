import { app } from './server';
import { passMiddleware } from './routers';
import { logger } from './util/logger';

import {
  userRoutes,
  classRoutes,
  lessonsRoutes,
  educationRoutes,
} from './routers';
import express from 'express';

const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    const date = new Date();
    const myFormat = `Method: ${
      req.method
    }, time: ${date}, payload: ${JSON.stringify(req.body)}`;
    logger.log('info', myFormat);
    next();
  }
});

app.use('/users', [passMiddleware], userRoutes);
app.use('/classes', [passMiddleware], classRoutes);
app.use('/lessons', [passMiddleware], lessonsRoutes);
app.use('/education', [passMiddleware], educationRoutes);

app.listen(port, () => {
  console.log(`Server API is up on port ${port}`);
});
