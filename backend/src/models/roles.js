import { Schema, model } from 'mongoose';

const rolesSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique : true
    },
    status: {
        type: String,
        default : "Active"
    }
}, { timestamps: true });

export const Roles = model('roles', rolesSchema);