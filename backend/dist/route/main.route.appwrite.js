var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from "express";
import createAppWriteClient from "../appwrite.js";
import { OAuthProvider } from "node-appwrite";
const router = Router();
router.get('/user', (req, res, next) => {
    try {
        const sessionCookie = req.cookies.session;
        if (!sessionCookie) {
            res.send('Please login');
            return;
        }
        res.json(sessionCookie);
    }
    catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
        else {
            res.send("Unknown error occurred");
        }
        process.exit(1);
    }
});
router.get('/auth', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { account } = yield createAppWriteClient("admin", "");
        const redirectUrl = yield account.createOAuth2Token(OAuthProvider.Google, "http://localhost:5000/api/success", "http://localhost:5000/api/fail");
        res.json({ redirectUrl });
    }
    catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
        process.exit(1);
    }
}));
router.get('/success', (req, res, next) => {
    try {
        res.json('/session set');
    }
    catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
        process.exit(1);
    }
});
router.get('/', (req, res, next) => {
    res.send("Hello from ROuter");
});
router.post('/login', (req, res, next) => {
    res.send("post");
});
export default router;
