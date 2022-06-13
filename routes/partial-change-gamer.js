const express = require('express');
const router = express.Router();

const Gamer = require('../models/gamers');



router.patch('/gamer/:idd', function (req, res, next) {

  Gamer.findOneAndUpdate({idd: 'ffff-ggg-hh'}, {gamer: req.body.gamer})
    .then((result) => { res.json(result) })
    .catch((err) => { res.json(err) });

});


module.exports = router;