const express = require('express');
const router = express.Router();



const Gamer = require('../models/gamers');
const Bet = require('../models/bet');





router.get('/:idd/winner/data', async (req, res, next) => {
    const idd = req.params.idd;


    const data = await Gamer.findOne({ idd: idd }).exec();
    const { gamers } = data;
    res.json(gamers);


});

router.get('/:idd/winner', async (req, res, next) => {

    res.render('winner');


});

router.get('/:idd/bets', async (req, res, next) => {

    const idd = req.params.idd;

    const data = await Bet.findOne({ idd: idd }).exec();
    const { gamerBet } = data;
    res.json(gamerBet);


});

module.exports = router;