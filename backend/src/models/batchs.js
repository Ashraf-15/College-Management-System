import { Schema, model } from 'mongoose';

const batchschema = new Schema({
    name: {
        Type: String,
        require: true,
        unique : true
    },
    students_list: [{
        type: Schema.Types.ObjectId,
        ref: "users"
    }],
    department: {
        type: Schema.Types.ObjectId,
        ref: "departments",
        require: true,
    }
}, { timestamps: true });

export const Batches = model('batchs', batchschema);