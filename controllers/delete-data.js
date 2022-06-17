const express = require('express');
const router = express.Router();

const Gamer = require('../models/gamers');
const Bet = require('../models/bet');


router.delete('/gamers/:idGame', async (req, res, next) =>{
try {
    const result = await Gamer.findOneAndDelete({ idGame: req.params.idGame})
    res.json(result);
} catch (error) {
    res.json({message: "Error"});
}       

});

router.delete('/bets/:idGame', async (req, res, next) =>{
    try {
        const result = await Bet.findOneAndDelete({ idGame: req.params.idGame})
        res.json(result);
    } catch (error) {
        res.json({message: "Error"});
    }
     
    });

module.exports = router;