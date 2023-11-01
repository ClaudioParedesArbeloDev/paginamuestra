import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const pictureSchema = new mongoose.Schema({
    location: String,
    description: String,
    picture: String
})

pictureSchema.plugin(mongoosePaginate)

const pictureModel = mongoose.model('pictures', pictureSchema)

export default pictureModel 