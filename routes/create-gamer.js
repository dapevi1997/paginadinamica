const express = require('express');
const router = express.Router();

const Gamer = require('../models/gamers');

router.get('/', function(req, res, next) {
    res.render('createGame');
  });

/* GET users listing. */
router.post('', function (req, res, next) {

    const gamer = new Gamer({
      gamer: req.body.gamer,
      idd: "ffff-ggg-hh"
    });
    
    gamer.save().then(result => {res.json(result)})
    .catch(err => {res.json(err)});
    
    });

module.exports = router;