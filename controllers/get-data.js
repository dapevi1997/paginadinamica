const express = require('express');
const router = express.Router();

const Gamer = require('../models/gamers');



router.get('/data', async (req, res, next) =>{
    const data = await Gamer.find({idd: "ffff-ggg-hh"});
    res.json(data);

});




module.exports = router;