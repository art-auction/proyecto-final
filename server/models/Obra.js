const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const Artist = mongoose.Schema("Artist")

const obraSchema = new Schema ({
    title: String,
    image: String,
    description: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: "Artist"} 

},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


const Obra = mongoose.model("Obra", obraSchema)
module.exports = Obra