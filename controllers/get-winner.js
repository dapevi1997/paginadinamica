/**
 * Importación de la librería express.
 */
const express = require('express');
/**
 * Importación de la función router de express.
 */
const router = express.Router();
/**
 * Importación del Schema Gamer para manejar la colección de jugadores.
 */
const Gamer = require('../models/gamers');
/**
 * Importación del Schema Bet para manejar la colección de apuestas.
 */
const Bet = require('../models/bet');
/**
 * API GET para renrendizar la página que muestra al ganador del juego.
 */
 router.get('/:idGame/winner', async (req, res, next) => {

    res.render('winner',{title: 'Juego de dados'});

});
/**
 * API GET para obtener lo datos sobre el ganador del juego.
 */
router.get('/:idGame/winner/data', async (req, res, next) => {

    const idGame = req.params.idGame;
    const data = await Gamer.findOne({ idGame: idGame }).exec();
    const { winner } = data;
    res.json(winner);


});

/**
 * API GET para obtener lo datos sobre las apuestas hechas por los jugadores.
 */
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