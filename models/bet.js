const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

const betSchema = new Schema({
    idd :{type: String,
        trim: true,
        required:[true, 'id requerido']
    },

    gamerBet: [{idGamer: String, bet: Number}]





});

module.exports = Bet = mongoose.model('Bet', betSchema);