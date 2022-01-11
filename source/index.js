import { app } from './server';

import {
  userRoutes,
  classRoutes,
  lessonsRoutes,
  educationRoutes,
} from './routers';
import express from 'express';

const port = 3000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/classes', classRoutes);
app.use('/lessons', lessonsRoutes);
app.use('/education', educationRoutes);

app.listen(port, () => {
  console.log(`Server API is up on port ${port}`);
});
