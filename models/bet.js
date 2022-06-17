const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const betSchema = new Schema({
    idGame :{type: String,
        trim: true,
        required:[true, 'id requerido']
    },

    gamerBet: [{idGamer: String, bet: {type:Number,trim:true,required:[true,'Las apuestas son requeridas']}}]


});

module.exports = Bet = mongoose.model('Bet', betSchema);