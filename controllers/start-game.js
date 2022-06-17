const express = require('express');
const router = express.Router();

const Bet = require('../models/bet');



router.get('', function(req, res, next) {
    res.render('startGame');
  });

/* GET users listing. */
router.post('', function (req, res, next) {

    const bet = new Bet({
      idd: "ffff-ggg-hh",
      gamerBet: req.body.gamerBet
    });
    
    bet.save().then(result => {res.json(result)})
    .catch(err => {res.json(err)});
    
    });

module.exports = router;