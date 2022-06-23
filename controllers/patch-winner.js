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
 * API PATCH para ingresar el ganador en la base de datos.
 */
router.patch('/:idGamer/:nameGamer', function (req, res, next) {
    const idGamer = req.params.idGamer;
    const nameGamer = req.params.nameGamer;
  Gamer.findOneAndUpdate({idGame: 'fffff-ggg-jjjjj'}, {winner:{idGamer: idGamer, nameGamer: nameGamer} })
    .then((result) => { res.json(result) })
    .catch((err) => { res.json(err) });

});


module.exports = router;