const express = require('express');
const router = express.Router();





router.get('/fffff-ggg-jjjjj', function(req, res, next) {
    res.render('gameState',{title: 'Juego de dados'});
  });

router.get('/:idGame/status', async (req, res, next) => {
    const idGame = req.params.idGame;


    const data = await Gamer.findOne({ idGame: idGame }).exec();
    const { inProgress } = data;
    res.json(inProgress);


});  

router.patch('/:idGame/:progress', function (req, res, next) {
    const idGame = req.params.idGame;
    const progress = req.params.progress;
  Gamer.findOneAndUpdate({idGame: idGame}, {inProgress: progress })
    .then((result) => { res.json(result) })
    .catch((err) => { res.json(err) });

});


module.exports = router;