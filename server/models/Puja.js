const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pujaSchema = new Schema ({
    obra: {type:Schema.Types.ObjectId, ref:"ObraMaestra"},
    pujaColection: []
},
   { timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

})

const Puja = mongoose.model('Puja', pujaSchema);

module.exports = Puja;