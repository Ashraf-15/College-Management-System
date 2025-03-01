// filepath: /c:/Users/Lenovo/OneDrive/Desktop/intellicampus/College-Management-System/backend/src/strategies/passport_jwt.js
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import { Users } from '../models/users.js';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        const user = await Users.findOne({ user_id: jwt_payload.user_id });
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    } catch (error) {
        console.error('Error while checking Bearer token:', error);
        done(error, false);
    }
}));