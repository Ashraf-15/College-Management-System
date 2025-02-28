import { Schema, model } from 'mongoose';

const annSchema = new Schema({
    title: {
        type: String,
        require : true
    },
    content: {
        type: Schema.Types.String,
        require : true
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
}, { timestamps: true });

export const Announcements = model('announcements', annSchema);