import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import createAppWriteClient from "../appwrite.js";
import { OAuthProvider } from "node-appwrite";

const router = Router();

router.get('/user', (req:Request, res:Response, next:NextFunction) => {
    try{
        const sessionCookie = req.cookies.session

        if(!sessionCookie){
            res.send('Please login')
            return;
        }
        res.json(sessionCookie)

    }catch(error:unknown){
        if(error instanceof Error){
            res.send(error.message)
        }else{
            res.send("Unknown error occurred")
        }
        process.exit(1)
    }
})

router.get('/auth', async (req:Request, res:Response, next:NextFunction) => {
    try{
        const {account} = await createAppWriteClient("admin", "")
        const redirectUrl = await account.createOAuth2Token(
            OAuthProvider.Google,
            "http://localhost:5000/api/success",
            "http://localhost:5000/api/fail",
        )
        res.json({redirectUrl})

    }catch(error:unknown){
        if(error instanceof Error){
            res.send(error.message)
        }
        process.exit(1)
    }
})

router.get('/success', (req:Request, res:Response, next:NextFunction) => {
    try{
        res.json('/session set')
    }catch(error:unknown){
        if(error instanceof Error){
            res.send(error.message)
        }
        process.exit(1)
    }
})

router.get('/',(req: Request, res:Response, next:NextFunction) => {
    res.send("Hello from ROuter");
})

router.post('/login',(req:Request, res:Response,next:NextFunction) => {
    res.send("post")
})

export default router;
