// Instruments
import { events } from '../schemas';

export class Events {
    constructor(data) {
        this.data = data;
        this.odm = events;
    }

    async read() {
        const { id: uid } = this.data;
        const source = await this.odm.find({ uid }).lean();

        const eventsData = source.map(
            ({
                id, title, description, created, dates,
            }) => ({
                id,
                title,
                description,
                created,
                dates,
            }),
        );

        return eventsData;
    }

    async create() {
        const eventData = await this.odm.create(this.data);

        const {
            _id: id, title, description, created, dates,
        } = eventData;

        return {
            id,
            title,
            description,
            created,
            dates,
        };
    }

    async update() {
        const { eventId, uid, ...data } = this.data;
        const eventData = await this.odm.findOneAndUpdate(
            { _id: eventId, uid },
            data,
            {
                new: true,
            },
        );

        if (!eventData) {
            throw new Error(`can not find calendar event with id: ${eventId}`);
        }

        const {
            _id: id, title, description, created, dates,
        } = eventData;

        return {
            id,
            title,
            description,
            created,
            dates,
        };
    }

    async remove() {
        const { eventId, uid } = this.data;
        const { n, deletedCount } = await this.odm.deleteOne({ _id: eventId, uid });

        if (Number(n) === Number(deletedCount)) {
            throw new Error(`can not find event with id: ${eventId}`);
        }
    }
}
