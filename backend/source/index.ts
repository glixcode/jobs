import express, {Express} from "express"
import cookieParser from "cookie-parser";
import router from "./route/main.route.js";
import dotenv from 'dotenv';
import { dbConnection } from "./database/db.connection.js";

const app:Express = express();
dotenv.config()

const PORT = process.env.PORT || 5000

app.listen(PORT,()=> {
    dbConnection()
    console.log(`Server Running at PORT:${PORT}`)
})

app.use(cookieParser())
app.use('/api',router);

app.use((req,res) => {
    res.status(404).send("unknown endpoint")
});

