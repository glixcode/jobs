var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Client, Databases, Account } from "node-appwrite";
import dotenv from "dotenv";
dotenv.config();
const createAppWriteClient = (type, session) => __awaiter(void 0, void 0, void 0, function* () {
    const { ENDPOINT, PROJECT_ID, API_KEY } = process.env;
    const client = new Client().setEndpoint(`${ENDPOINT}`).setProject(`${PROJECT_ID}`);
    if (type === "admin") {
        client.setKey(`${API_KEY}`);
    }
    if (type === "session" && session) {
        client.setSession(session);
    }
    return {
        get account() {
            return new Account(client);
        },
        get databases() {
            return new Databases(client);
        }
    };
});
export default createAppWriteClient;
