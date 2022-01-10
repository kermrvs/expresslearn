// Core
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Document shape
const schema = new mongoose.Schema({
    title: {
        type:     String,
        required: true,
    },
    description: {
        type:     String,
        required: true,
    },
    uid: {
        type:     mongoose.Schema.Types.ObjectId,
        ref:      'customers',
        required: true,
        index:    true,
    },
    invites: [{
        uid: {
            type: mongoose.Schema.Types.ObjectId,
            ref:  'customers',
        },
        status: {
            type: Boolean,
            enum: ['accepted', 'declined', 'maybe'],
        },
    }],
    dates: {
        start: {
            type:     Date,
            required: true,
        },
        end: {
            type:     Date,
            required: true,
        },
    },
}, { timestamps: { createdAt: 'created', updatedAt: 'modified' } });

schema.plugin(mongoosePaginate);

// Collection
export const events = mongoose.model('events', schema);
