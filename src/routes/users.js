import { validationResult, matchedData, checkSchema, body } from 'express-validator';
import { Router } from 'express';
import { Users } from '../models/users.js';
import passport from 'passport';
import { users_validation } from '../utils/validation_schemas.js';
import { Types } from 'mongoose';
import { Roles } from '../models/roles.js';
import { comparePassword, generateHash, generateUserId } from '../utils/helper.js';
import jwt from 'jsonwebtoken';

const route = Router();
const auth = passport.authenticate('jwt', { session: false });

// get users
route.get('/',async (req, res) => {
    try {
        const data = await Users.find();
        res.status(200).send({ result: true, message: "Data fetch successfully", data: data });
    } catch (error) {
        console.error("Error while fetching Users : ", error);
        res.status(500).send({ result: false, message: "Internal server Error while getting Users", data: error })
    }
});

// add users
route.post('/', checkSchema(users_validation), (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).send({ result: false, message: "Invalid data", data: result.array() });
    }
    next();
}, async (req, res) => {
    try {
        const role = Roles.find({ name: "Admin" });
        if (true) {
            const data = matchedData(req);
            data.user_id = data.user_id ? data.user_id : generateUserId();
            data.password = await generateHash(data.password);
            const newUser = await Users.create(data);
            res.status(201).send({ result: true, message: "Users created successfully", data: newUser });
        }
        else {
            res.status(403).send({ result: true, message: "You desn't have a permission to do this operation", data: [] });
        }
    } catch (error) {
        console.error("Error while creating Users : ", error);
        res.status(500).send({ result: false, message: "Internal server Error while creating Users", data: error })
    }
});

// update users
route.post('/:id', checkSchema(users_validation), (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).send({ result: false, message: "Invalid data", data: result.array() });
    }
    next();
}, async (req, res) => {
    const id = req.params.id;
    if (!Types.ObjectId.isValid(id)) {
        return res.status(400).send({ result: false, message: "Invalid id", data: null });
    }
    try {
        const role = Roles.find({ name: "Admin" });
        if (true) {
            const data = matchedData(req);
            const updated = await Users.findByIdAndUpdate(id, data);
            res.status(200).send({ result: true, message: "Users updated successfully", data: updated });
        }
        else {
            res.status(403).send({ result: true, message: "You desn't have a permission to do this operation", data: [] });
        }
    } catch (error) {
        console.error("Error while updating Users : ", error);
        res.status(500).send({ result: false, message: "Internal server Error while updating Users", data: error })
    }
});

// delete users        
route.delete('/:id', async (req, res) => {
    const id = req.params.id;
    if (!Types.ObjectId.isValid(id)) {
        return res.status(400).send({ result: false, message: "Invalid id", data: null });
    }
    try {
        const role = Roles.find({ name: "Admin" });
        if (true) {
            const deleted = await Users.findByIdAndDelete(id);
            res.status(200).send({ result: true, message: "Users deleted successfully", data: deleted });
        }
        else {
            res.status(403).send({ result: true, message: "You desn't have a permission to do this operation", data: [] });
        }
    } catch (error) {
        console.error("Error while deleting Users : ", error);
        res.status(500).send({ result: false, message: "Internal server Error while deleting Users", data: error })
    }
});

// login
route.post('/login', [
    body('email').isEmail().withMessage('Email is invalid').notEmpty().withMessage('Email is required'),
    body('password').notEmpty().withMessage('Password is required')
], async (req, res) => {
    try {
        console.log("test1");
        const user = await Users.findOne({ email: req.body.email });
        if (user) {
            console.log("test2");
            if (comparePassword(req.body.password, user.password)) {
                const token = jwt.sign({ user_id : user.user_id }, process.env.JWT_SECRET);
                res.status(200).send({ result: true, message: "Login successful", data: token });
            }
            else {
                res.status(400).send({ result: false, message: "Invalid password", data: [] });
            }
        }
        else {
            res.status(404).send({ result: false, message: "User not found", data: [] });
        }
    } catch (error) {
        console.error("Error while login : ", error);
        res.status(500).send({ result: false, message: "Internal server Error while login", data: error })
    }
});

export default route;