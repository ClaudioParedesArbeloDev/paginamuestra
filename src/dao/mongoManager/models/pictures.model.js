import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const picturesCollection = 'pictures'

const picturesSchema = new mongoose.Schema({
    categoria: {type: String, require: true},
    description: {type: String, require: true},
    picture: {type: String, require: true},
})

picturesSchema.plugin(mongoosePaginate)

const picturesModel = mongoose.model(picturesCollection, picturesSchema)

export default picturesModel
