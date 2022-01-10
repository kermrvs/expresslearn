// Instruments
import { customers } from '../schemas';

export class Customers {
    constructor(data) {
        this.data = data;
        this.odm = customers;
    }

    async read() {
        const { email: queryEmail } = this.data;
        const customerData = await this.odm.findOne({ email: queryEmail }).lean();

        const { email, fname, lname } = customerData;

        return { email, fname, lname };
    }

    async create() {
        const customersData = await this.odm.create(this.data);

        const {
            _id: id, email, fname, lname,
        } = customersData;

        return {
            id,
            email,
            fname,
            lname,
        };
    }
}
