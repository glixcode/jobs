import passport from "passport"
import {Strategy as GoogleStrategy} from "passport-google-oauth20"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config()

const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,GOOGLE_CALLBACK_URL, JWT_SECRET} = process.env;

console.log({GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,GOOGLE_CALLBACK_URL, JWT_SECRET})

passport.use(
    new GoogleStrategy(
        {
            clientID : GOOGLE_CLIENT_ID!,
            clientSecret: GOOGLE_CLIENT_SECRET!,
            callbackURL : GOOGLE_CALLBACK_URL,
            passReqToCallback: true
        },
        async (req,accessToken, refreshToken, profile, done) => {
            
            const payload = {
                id      :   profile.id,
                name    :   profile.displayName,
                email   :   profile.emails?.[0]?.value,
                picture :   profile.photos?.[0]?.value
            }

            const token:string = jwt.sign(payload,JWT_SECRET!,{
                expiresIn: "1d"
            });

            (req as any).jwtToken = token;

            return done(null, profile)

        }
    )
)

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((obj, done)=> {
    done(null, obj!)
})