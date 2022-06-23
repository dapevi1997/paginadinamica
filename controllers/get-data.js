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
 * API GET para obtener los datos de los jugadores activos.
 */
router.get('/data', async (req, res, next) =>{
    const data = await Gamer.find({idGame: "fffff-ggg-jjjjj"});
    res.json(data);

});




module.exports = router;