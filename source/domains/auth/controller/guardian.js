import { Guardian as GuardianModel } from '../services/guardian';

export class Guardian {
    constructor(data) {
        this.models = {
            guardian: new GuardianModel(data),
        };
    }

    async login() {
        const { guardian } = this.models;
        const data = await guardian.login();

        return data;
    }
}
