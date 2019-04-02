const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const obraMaestraSchema = new Schema ({
 title: String,
 price: Number,
 año: Number,
 image: String,
 description: String,
 author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})


const ObraMaestra = mongoose.model("ObraMaestra", obraMaestraSchema)
module.exports = ObraMaestra