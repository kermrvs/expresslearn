// Core
import dg from 'debug';

// Instruments
import { Guardian } from './controller/guardian';

const debug = dg('router:guardian');

export const login = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        if (!req.get('authorization')) {
            throw new Error('credentials are not valid');
        }

        const [type, credentials] = req.headers.authorization.split(' ');

        if (type !== 'Basic') {
            throw new Error('you should use basic authentication type');
        }
        const [email, password] = Buffer.from(credentials, 'base64')
            .toString()
            .split(':');

        const auth = new Guardian({ email, password });
        const token = await auth.login();

        res.status(200).json({ data: token });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
