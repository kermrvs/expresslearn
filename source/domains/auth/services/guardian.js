// Core
import bcrypt from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import { v4 } from 'uuid';

// Instruments
import { tokens } from '../schemas';
import { customers } from '../../customers/schemas';
import { NotFoundError } from '../../../helpers';

export class Guardian {
    constructor(data) {
        this.data = data;
        this.odm = customers;
        this.tokensOdm = tokens;
        this.key = process.env.JWT_PASSWORD;
    }

    async login() {
        const { email, password } = this.data;
        const userData = await this.odm
            .findOne({ email })
            .select('password hash email fname lname')
            .lean();

        if (!userData) {
            throw new NotFoundError('credentials are not valid');
        }

        const {
            _id: id,
            password: userPassword,
            email: userEmail,
            fname,
            lname,
        } = userData;

        const match = await bcrypt.compare(password, userPassword);

        if (!match) {
            throw new NotFoundError('credentials are not valid');
        }

        const key = v4();

        const token = jsonwebtoken.sign(
            {
                id, email: userEmail, fname, lname,
            },
            key,
            { expiresIn: '1h' },
        );

        await this.tokensOdm.create({ token, key });

        return token;
    }
}
