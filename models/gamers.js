const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

const gamerSchema = new Schema({
    idd :{type: String,
        trim: true,
        required:[true, 'id requerido']
    },

    gamer: {
        type:[{
            type: String,
            trim: true,
            required:[true, 'El nombre del jugador es requerido']
        }]
    },
    igGamer: {
        type: mongoose.Types.ObjectId
    }




});

module.exports = Gamer = mongoose.model('Gamer', gamerSchema);