import { Router } from "express";
import "./googleAuth.js";
import passport from "passport";
const router = Router();
router.get('/', (req, res, next) => {
    res.send(`<a href='api/auth/google'>Authenticate with google</a>`);
});
router.get('/auth/google', (req, res, next) => {
    console.log("Initiating Google Auth");
    next();
}, passport.authenticate('google', { scope: ['email', 'profile'] }));
router.get('/protected', (req, res) => {
    if (req.isAuthenticated()) {
        const user = req.user;
        res.send(user);
    }
    else {
        res.redirect('/api');
    }
});
router.get('/google/callback', passport.authenticate('google', {
    session: false
    // successRedirect : "api/protected",
    // failureRedirect : "/api"
}), (req, res) => {
    const token = req.jwtToken;
    res.redirect(`http://localhost:5174/userPage?token=${token}`);
});
router.post('/login', (req, res, next) => {
    res.send("post");
});
export default router;
