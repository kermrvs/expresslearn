// Core
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import dg from 'debug';

// Instruments
import { NotFoundError } from './helpers';

// DB
import './db';

// Routes
import { guardian, customers, events } from './domains';

const app = express();
const debug = dg('server:init');

const whitelist = ['http://localhost:3000', 'http://127.0.0.1:3000'];
const corsOptions = {
    origin(origin, callback) {
        if (process.env.NODE_ENV === 'development') {
            callback(null, true);
        } else if (whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 204,
};

app.use(helmet());
app.use(cors(corsOptions));

app.use(
    bodyParser.json({
        limit: '10kb',
    }),
);

app.use('/api', [
    guardian, customers, events,
]);

app.use('*', (req, res, next) => {
    const error = new NotFoundError(
        `Route not found ${req.method} — '${req.originalUrl}'`,
        404,
    );
    next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    const { name, message, statusCode } = error;
    const errorMessage = `${name}: ${message}`;

    debug(`Error: ${errorMessage}`);

    const status = statusCode || 500;
    res.status(status).json({ message });
});

export { app };
