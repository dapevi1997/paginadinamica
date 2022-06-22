/**
 * Importación del módulo express.
 */
const express = require('express');
/**
 * Llamado y guardado de la función router de express.
 */
const router = express.Router();
/**
 * Importación del esquema Dice para manipular datos del dado.
 */
const Dice = require('../models/dice');
/**
 * API GET para obtener el valor actual del dado en la base de datos.
 */
router.get('/result', async (req, res, next) => {

  const data = await Dice.findOne({ iGame: 'fffff-ggg-jjjjj' }).exec();
  const { result } = data;
  res.json(result);


});
/**
 * API POST para guardar información del dato para luego ser modificada.
 */
router.post('/init', function (req, res, next) {

  const dice = new Dice({
    idGame: "fffff-ggg-jjjjj",
    result: 0
    
  });
  
  dice.save().then(result => {res.json(result)})
  .catch(err => {res.json(err)});
  
  });

/**
 * API PATCH para modificar el resultado del dado lanzado en la base de datos. 
 */
router.patch('/:Result', function (req, res, next) {

  const Result = req.params.Result;

  Dice.findOneAndUpdate( {idGame: "fffff-ggg-jjjjj"}, {result: Result})
    .then((result1) => { res.json(result1) })
    .catch((err) => { res.json(err) });

});


module.exports = router;