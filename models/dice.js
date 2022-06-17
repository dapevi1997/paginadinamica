const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DiceSchema = new Schema({
    idGame: {type:String, unique: true},
    result :{type: Number,
        trim: true,
        default:0
    },

});

module.exports = Dice = mongoose.model('Dice', DiceSchema);