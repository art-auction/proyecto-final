const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    username: String,
    password: String,
    profileImg: String,  
    obras:[String]

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;