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
 * API GET para reenderizar la página Crear Juego.
 */
router.get('/', function (req, res, next) {
  res.render('createGame', { title: 'Juego de dados' });
});

/**
 * API POST para guardar la información de los juegdores en la colección Gamer.
 */
router.post('', async (req, res, next) => {
  try {
    const data = await new Gamer({
      gamers: req.body.gamers,
      idGame: "fffff-ggg-jjjjj"
    });
    await data.save();
    res.json({ message: "Exito" });


  } catch (e) {
    res.json({ message: "Error" });
  }

});

module.exports = router;