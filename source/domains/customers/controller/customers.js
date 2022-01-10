import { Customers as CustomersModel } from '../services/customers';

export class Customers {
    constructor(data) {
        this.models = {
            customers: new CustomersModel(data),
        };
    }

    async read() {
        const { customers } = this.models;
        const data = await customers.read();

        return data;
    }

    async create() {
        const { customers } = this.models;
        const data = await customers.create();

        return data;
    }
}
