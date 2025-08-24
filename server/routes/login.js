import express from 'express'
import {  login , logout, insertServices } from '../controllers/login.js'


const router = express.Router()

router.post("/login", login)
router.post("/logout", logout)
router.post("/insert-services", insertServices)


export default router