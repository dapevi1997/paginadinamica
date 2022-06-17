const express = require('express');
const router = express.Router();

const Dice = require('../models/dice');

router.get('/result', async (req, res, next) => {

  const data = await Dice.findOne({ iGame: 'fffff-ggg-jjjjj' }).exec();
  const { result } = data;
  res.json(result);


});

router.post('/init', function (req, res, next) {

  const dice = new Dice({
    idGame: "fffff-ggg-jjjjj",
    
  });
  
  dice.save().then(result => {res.json(result)})
  .catch(err => {res.json(err)});
  
  });


router.patch('/:Result', function (req, res, next) {

  const Result = req.params.Result;

  Dice.findOneAndUpdate( {idGame: "fffff-ggg-jjjjj"}, {result: Result})
    .then((result1) => { res.json(result1) })
    .catch((err) => { res.json(err) });

});


module.exports = router;