/**
 * Importación de la librería express.
 */
const express = require('express');
/**
 * Importación de la función router de express.
 */
const router = express.Router();
/**
 * API GET para renderizar la página que muestra el estado del juego.
 */
router.get('/fffff-ggg-jjjjj', function(req, res, next) {
    res.render('gameState',{title: 'Juego de dados'});
  });
/**
 * API GET para obtener el estado del juego.
 */
router.get('/:idGame/status', async (req, res, next) => {

    const idGame = req.params.idGame;
    const data = await Gamer.findOne({ idGame: idGame }).exec();
    const { inProgress } = data;
    res.json(inProgress);

});  
/**
 * API PATCH para modificar el estado del juego.
 */
router.patch('/:idGame/:progress', function (req, res, next) {
    const idGame = req.params.idGame;
    const progress = req.params.progress;
  Gamer.findOneAndUpdate({idGame: idGame}, {inProgress: progress })
    .then((result) => { res.json(result) })
    .catch((err) => { res.json(err) });

});


module.exports = router;