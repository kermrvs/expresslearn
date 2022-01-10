// Core
import { verify } from 'jsonwebtoken';

// Instruments
import { tokens } from '../auth/schemas';

export const authenticate = async (req, res, next) => {
    const token = req.get('authorization');
    const source = await tokens.findOne({ token }).lean();

    if (!source) {
        res.status(401).json({ message: 'credentials are not valid' });
    } else {
        try {
            const user = verify(token, source.key);
            const {
                id, email, fname, lname,
            } = user;

            req.user = {
                id, email, fname, lname,
            };

            next();
        } catch (error) {
            res.status(401).json({ message: 'credentials are not valid' });
        }
    }
};
