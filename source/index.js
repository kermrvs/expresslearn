import { app } from './server';
import {
  userRoutes,
  classRoutes,
  lessonsRoutes,
  educationRoutes,
} from './routers';
import {
  myDebugLogger,
  myErrorLogger,
  passMiddleware,
  checkEndpoints,
} from './util';
import bodyParser from 'body-parser';

const port = process.env.PORT;

app.use(bodyParser.json());

app.use(myDebugLogger);

app.use('/users', [passMiddleware], userRoutes);
app.use('/classes', [passMiddleware], classRoutes);
app.use('/lessons', [passMiddleware], lessonsRoutes);
app.use('/education', [passMiddleware], educationRoutes);
app.use('*', [checkEndpoints]);

app.use(myErrorLogger);

app.listen(port, () => {
  console.log(`Server API is up on port ${port}`);
});
