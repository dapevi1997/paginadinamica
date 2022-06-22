var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

const mongodb = 'mongodb://localhost/gamers';
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MondoDB conectada'))
  .catch(err => { console.log(err) });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./controllers/index'));
app.use('/users', require('./controllers/users'));
app.use('/createGame', require('./controllers/create-gamer'));

app.use('/startGame', require('./controllers/start-game'));
app.use('/startGame', require('./controllers/partial-change-gamer'));//api cambio parcial con patch
app.use('/startGame', require('./controllers/get-data'));
app.use('/game', require('./controllers/get-winner'));
app.use('/game', require('./controllers/delete-data'));
app.use('/game', require('./controllers/game-state'));
app.use('/dice', require('./controllers/dice-result'));
app.use('/winner', require('./controllers/patch-winner'));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
