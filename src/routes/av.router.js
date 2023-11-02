import { Router } from "express";
import PictureModel from '../dao/mongoManager/models/picture.model.js'


const router = Router()

router.get('/', async(req, res) =>{

    
    
    const result = await PictureModel.paginate({}, {
        page: 1,
        limit: 14,
        lean: true
    })

    result.prevLink
    res.render('av', result)
    
    
})


export default router  