/**
 * Importación de la librería mongoose para trabajar con MongoDB.
 */
const mongoose = require('mongoose');
/**
 * Llamado de la propiedad Schema de mongoose.
 */
const Schema = mongoose.Schema;

/**
 * Creación de un Schema para guardar información de las apuestas de los jugadores.
 */
const betSchema = new Schema({
    idGame :{type: String,
        trim: true,
        required:[true, 'id requerido']
    },

    gamerBet: [{idGamer: String, bet: {type:Number,trim:true,required:[true,'Las apuestas son requeridas'], min:1, max:6}}]


});

module.exports = Bet = mongoose.model('Bet', betSchema);