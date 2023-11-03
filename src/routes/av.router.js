import { Router } from "express";
import PictureModel from '../dao/mongoManager/models/picture.model.js'


const router = Router()

router.get('/', async(req, res) =>{

    const page = parseInt(req.query?.page || 1)
    const limit = parseInt(req.query?.limit || 14)
    const queryParams = req.query?.query || ''
    const query = {}
    if (queryParams) {
        const field = queryParams.split(',')[0]
        let value = queryParams.split(',')[1]
            if(!isNaN(parseInt(value))) value = parseInt(value)
            query[field] = value            

    }

    const result = await PictureModel.paginate(query,{
        page,
        limit,
        lean: true
    })
    

    result.prevLink = result.hasPrevPage ? `/av?page=${result.prevPage}&limit=${limit}` : ''
    result.nextLink = result.hasNextPage ? `/av?page=${result.nextPage}&limit=${limit}` : ''
    res.render('av', result)
    
    
})


export default router  