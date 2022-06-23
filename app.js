/**
 * Importación del módulo http-errors.
 */
var createError = require('http-errors');
/**
 * Importación de express.
 */
var express = require('express');
/**
 * Importación de path.
 */
var path = require('path');
/**
 * Importación de cookie-parser.
 */
var cookieParser = require('cookie-parser');
/**
 * Importación de morgan.
 */
var logger = require('morgan');
/**
 * Importación de la librería mongoose.
 */
const mongoose = require('mongoose');
/**
 * Conectando a la base de datos local.
 */
const mongodb = 'mongodb://localhost/gamers';
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MondoDB conectada'))
  .catch(err => { console.log(err) });

var app = express();

/**
 * Configurando el motor de vistas.
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
/**
 * Configuraciones adicionales para la aplicación.
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Rutas para conectar las APIS.
 */
app.use('/createGame', require('./controllers/create-gamer'));
app.use('/startGame', require('./controllers/start-game'));
app.use('/startGame', require('./controllers/get-data'));
app.use('/game', require('./controllers/get-winner'));
app.use('/game', require('./controllers/delete-data'));
app.use('/game', require('./controllers/game-state'));
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
