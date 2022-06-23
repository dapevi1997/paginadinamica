/**
 * Importación de la librería express.
 */
const express = require('express');
/**
 * Importación de la función router de express.
 */
const router = express.Router();
/**
 * Importación del Schema Bet para manejar la colección de apuestas.
 */
const Bet = require('../models/bet');
/**
 * API GET para reenderizar la página Empezar Juego.
 */
router.get('', function(req, res, next) {
    res.render('startGame',{title: 'Juego de dados'});
  });

/**
 * API POST para guardar las apuestas de los jugadores.
 */
router.post('', function (req, res, next) {

    const bet = new Bet({
      idGame: "fffff-ggg-jjjjj",
      gamerBet: req.body.gamerBet
    });
    
    bet.save().then(result => {res.json(result)})
    .catch(err => {res.json(err)});
    
    });

module.exports = router;