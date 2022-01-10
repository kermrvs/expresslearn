// Core
import dg from 'debug';

// Instruments
import { Events } from './controller/events';

const debug = dg('router:event');

export const get = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const event = new Events(req.user);
        const data = await event.read();

        res.status(200).json({ data });
    } catch ({ message }) {
        res.status(400).json({ message });
    }
};

export const post = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const event = new Events({ ...req.body, uid: req.user.id });
        const data = await event.create();

        res.status(201).json({ data });
    } catch ({ name, message }) {
        res.status(400).json({ message });
    }
};

export const put = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const { eventId } = req.params;
        const event = new Events({ ...req.body, uid: req.user.id, eventId });
        const data = await event.update();

        res.status(200).json({ data });
    } catch ({ name, message }) {
        res.status(400).json({ message });
    }
};

export const remove = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const { eventId } = req.params;
        const event = new Events({ uid: req.user.id, eventId });
        await event.remove();

        res.sendStatus(204);
    } catch ({ name, message }) {
        res.status(400).json({ message });
    }
};
