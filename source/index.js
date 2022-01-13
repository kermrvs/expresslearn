import { app } from './server';
import { passMiddleware } from './routers';

import {
  userRoutes,
  classRoutes,
  lessonsRoutes,
  educationRoutes,
} from './routers';
import express from 'express';
import { myLogger } from './util/myLogger';

const port = 3000;

app.use(express.json());

app.use(myLogger);

app.use('/users', [passMiddleware], userRoutes);
app.use('/classes', [passMiddleware], classRoutes);
app.use('/lessons', [passMiddleware], lessonsRoutes);
app.use('/education', [passMiddleware], educationRoutes);

app.listen(port, () => {
  console.log(`Server API is up on port ${port}`);
});
