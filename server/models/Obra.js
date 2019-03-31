const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const obraSchema = new Schema ({
    title: String,
    image: String,
    description: String,

},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


const Obra = mongoose.model("Obra", obraSchema)
module.exports = Obra