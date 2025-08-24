import express from 'express'
import {  createRdv  } from '../controllers/rdv.js'


const router = express.Router()

router.post("/", createRdv)



export default router