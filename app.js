const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
//defino mi ruta
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const especialistas = require('./routes/especialistas');
const especialidades = require('./routes/especialidades');
const registro = require('./routes/registro');
const login = require('./routes/login');
const contacto = require('./routes/contacto');
const adminEspecialistas = require('./routes/admin/especialistas');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//llamo mi ruta
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/especialistas', especialistas);
app.use('/especialidades', especialidades);
app.use('/registro', registro);
app.use('/login', login);
app.use('/contacto', contacto);
app.use('/admin/especialistas', adminEspecialistas);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
