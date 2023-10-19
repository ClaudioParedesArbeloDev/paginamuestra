import { Router } from "express";
import pictureModel from "../dao/mongoManager/models/pictures.model.js"

const router = Router()

router.get('/', async(req, res) =>{
    const pictures = await pictureModel
    
    res.render('av')
})




export default router