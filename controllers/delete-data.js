/**
 * Importación del módulo express.
 */
const express = require('express');
/**
 * Almacenamiento del método router de express.
 */
const router = express.Router();
/**
 * Importación del modelo GAmer en donde se guardan los datos del jugador.
 */
const Gamer = require('../models/gamers');
/**
 * Importación del modelo GAmer en donde se guardan las apuestas del jugador.
 */
const Bet = require('../models/bet');

/**
 * API para limpiar la colección de jugadores de la base de datos al crear un nuevo juego.
 */
router.delete('/gamers/:idGame', async (req, res, next) => {
    try {
        const idGame = req.params.idGame;
        await Gamer.findOneAndDelete({ idGame: idGame });

   

      
       res.json({ message: "Exito"});


    } catch (error) {
        res.json({ message: "Error" });
       
    }

});
/**
 * API para limpiar la colección de apuestas de la base de datos al crear un nuevo juego.
 */
router.delete('/bets/:idGame', async (req, res, next) => {
    try {
        const idGame = req.params.idGame;
        await Bet.findOneAndDelete({ idGame: idGame });
        res.json({ message: "Exito" });
       
      
    } catch (error) {
        res.json({ message: "Error" });
        
    }

});
/**
 * Permite el uso del presente módulo.
 */
module.exports = router;