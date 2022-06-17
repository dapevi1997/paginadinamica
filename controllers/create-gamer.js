const express = require('express');
const router = express.Router();

const Gamer = require('../models/gamers');

router.get('/', function (req, res, next) {
  res.render('createGame', { title: 'Juego de dados' });
});

/* GET users listing. */
router.post('', async (req, res, next) => {
  try {
    const data = await new Gamer({
      gamers: req.body.gamers,
      idGame: "fffff-ggg-jjjjj"
    });
    await data.save();
    res.json({message: "Exito"});


  } catch (e) {
    res.json({message: "Error"});
  }

});

module.exports = router;