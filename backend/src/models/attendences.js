import { Schema, model } from 'mongoose';

const attendencesSchema = new Schema({
    batch: {
        type: Schema.Types.ObjectId,
        ref : "batchs",
        require: true,
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: "departments",
        require: true,
    },
    year: {
        type: String,
        require : true
    },
    month: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require : true
    },
    students_list: [{
        type: Schema.Types.ObjectId,
        ref: "users"
    }],
    given_by: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
}, { timestamps: true });


export const Attendances = model('attendances', attendencesSchema);