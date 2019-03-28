const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    username: String,
    password: String,
    profileImg: String,  
    obras:{
        pic1: String,
        pic2: String,
        pic3: String,
  }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;