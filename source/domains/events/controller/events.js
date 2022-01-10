import { Events as EventsModel } from '../services/events';

export class Events {
    constructor(data) {
        this.models = {
            events: new EventsModel(data),
        };
    }

    async read() {
        const { events } = this.models;
        const data = await events.read();

        return data;
    }

    async create() {
        const { events } = this.models;
        const data = await events.create();

        return data;
    }

    async update() {
        const { events } = this.models;
        const data = await events.update();

        return data;
    }

    async remove() {
        const { events } = this.models;
        const data = await events.remove();

        return data;
    }
}
