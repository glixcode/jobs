import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import "./googleAuth.js"
import passport from "passport";
const router = Router();


router.get('/',(req: Request, res:Response, next:NextFunction) => {
    res.send(`<a href='api/auth/google'>Authenticate with google</a>`)
})

router.get('/auth/google', (req:Request, res:Response, next: NextFunction) => {
    console.log("Initiating Google Auth")
    next()
}, passport.authenticate('google',{scope: ['email', 'profile']}))

router.get('/protected', (req:Request, res:Response)=> {
    if(req.isAuthenticated()){
        const user = req.user
        res.send(user)
    }else{
        res.redirect('/api')
    }
})

router.get('/google/callback',
    passport.authenticate('google', {
        session : false
        // successRedirect : "api/protected",
        // failureRedirect : "/api"
    }),
    (req, res) => {
        const token = (req as any).jwtToken
        
        res.redirect(`http://localhost:5174/userPage?token=${token}`)
    }
)

router.post('/login',(req:Request, res:Response,next:NextFunction) => {
    res.send("post")
})

export default router;
