// Core
import dg from 'debug';

// Instruments
import { Customers } from './controller/customers';

const debug = dg('router:customers');

export const get = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const customer = new Customers(req.user);
        const data = await customer.read();

        res.status(200).json({ data });
    } catch ({ message }) {
        res.status(400).json({ message });
    }
};

export const post = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const customer = new Customers(req.body);
        const data = await customer.create();

        res.status(201).json({ data });
    } catch ({ name, message }) {
        if (name === 'ValidationError') {
            res.status(500).json({
                message,
            });
        } else {
            res.status(400).json({ message });
        }
    }
};
