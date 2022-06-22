const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const gamerSchema = new Schema({
    idGame :{type: String,
        trim: true,
        required:[true, 'id requerido']
    },
    gamers: [{nameGamer: {type:String, trim: true,required:[true, 'Los nombres son requeridos']}, idGamer: String}],
    inProgress: {type:Boolean, default: true},
    winner:{idGamer: {type:String,default:"-------"}, nameGamer: {type:String,default:"Aún sin ganador"}}

});

module.exports = Gamer = mongoose.model('Gamer', gamerSchema);