const express = require('express');
const router = express.Router();



const Gamer = require('../models/gamers');
const Bet = require('../models/bet');





router.get('/:idGame/winner/data', async (req, res, next) => {
    const idGame = req.params.idGame;


    const data = await Gamer.findOne({ idGame: idGame }).exec();
    const { winner } = data;
    res.json(winner);


});

router.get('/:idGame/winner', async (req, res, next) => {

    res.render('winner');

});

router.get('/:idGame/bets', async (req, res, next) => {

    const idGame = req.params.idGame;
    try {
        const data = await Bet.findOne({ idGame: idGame }).exec();
        const { gamerBet } = data;
        res.json(gamerBet);
    } catch (error) {

    }




});

module.exports = router;