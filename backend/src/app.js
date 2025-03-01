// filepath: /c:/Users/Lenovo/OneDrive/Desktop/intellicampus/College-Management-System/backend/src/app.js
import express from 'express';
import passport from 'passport';
import 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';
import users from './routes/users.js';
import departments from './routes/departments.js';
import roles from './routes/roles.js';
import courses from './routes/courses.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Parse incoming JSON-formatted request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data with the querystring library (extended: true allows for rich objects and arrays)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB successfully connected');
    })
    .catch((err) => {
        console.log('Error while connecting with MongoDB', err);
    });

// set-up cors
app.use(cors({
    origin: '*',
    credentials: true,
    maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
}));

// for production
app.set('trust proxy', 1);

// initialize passport
app.use(passport.initialize());

app.get('/', (req, res) => {
    console.log('Welcome to the project');
    res.status(200).send({ result: true, message: 'Welcome to the college management project' });
});

// routes
app.use('/api/v1/users', users);
app.use('/api/v1/courses', courses);
app.use('/api/v1/departments', departments);
app.use('/api/v1/roles', roles);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ result: false, message: 'Internal server error', data: err });
});

app.listen(port, () => {
    console.log(`Application started at http://localhost:${port}/`);
});