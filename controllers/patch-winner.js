const express = require('express');
const router = express.Router();

const Gamer = require('../models/gamers');



router.patch('/:idGamer/:nameGamer', function (req, res, next) {
    const idGamer = req.params.idGamer;
    const nameGamer = req.params.nameGamer;
  Gamer.findOneAndUpdate({idGame: 'fffff-ggg-jjjjj'}, {winner:{idGamer: idGamer, nameGamer: nameGamer} })
    .then((result) => { res.json(result) })
    .catch((err) => { res.json(err) });

});


module.exports = router;