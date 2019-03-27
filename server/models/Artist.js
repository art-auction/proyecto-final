const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    username: String,
    password: String,    
    imageUrl: String,
  

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


const Artist = mongoose.model('User', artistSchema);
module.exports = Artist;