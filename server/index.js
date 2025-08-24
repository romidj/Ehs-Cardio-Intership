import express from "express"
import mysql from "mysql2"
import cors from "cors"
import db from "./db.js";
import { login } from "./controllers/login.js";
import rdvRoutes from "./routes/rdv.js";

const app = express();
app.use(cors()) 

app.use(express.json())


app.use("/api/auth/login",login)
app.use("/api/rdv", rdvRoutes)





app.listen(8081, ()=> {
    console.log('Server is running on port 8081')
})