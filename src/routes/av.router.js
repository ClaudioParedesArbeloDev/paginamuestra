import { Router } from "express";

const router = Router()

router.get('/', async(req, res) =>{
    res.render('av')
})

export default router