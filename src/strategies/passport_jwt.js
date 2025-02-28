import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import { Users } from '../models/users.js';

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
    console.log(jwt_payload);
    try {
        let user = await Users.find(jwt_payload.user_id);
        if (user) {
            done(null, user);
        }
        else {
            done(null, null);
        }
    } catch (error) {
        console.error("Error whilw checking Bearer token : ", error);
        done(error, null);
    }
}));
