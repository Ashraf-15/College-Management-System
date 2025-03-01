import { Schema, model } from 'mongoose';

const departmentSchema = new Schema({
    dept_id: {
        type: String,
        require: true,
        unique : true
    },
    name: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        default : "Active"
    }
}, { timestamps: true });

export const Departments = model('departments', departmentSchema);