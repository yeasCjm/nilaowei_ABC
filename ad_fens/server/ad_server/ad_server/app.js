var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cookieParase = require('cookie-parser');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.all('*', function (req, res, next) {//摄者跨域问题
 // console.log(req.headers);
  res.header("Access-Control-Allow-Origin", (req.headers['origin'] ? req.headers['origin'] : "http://" + req.hostname));
  //res.header("Access-Control-Allow-Origin", "http://" + req.hostname);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.header('Content-Type', 'application/json;charset=utf-8');
  //res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //禁止缓存
  res.header("Cache-Control", "no-cache,must-revalidate");
  res.header("Pragma", "no");
  res.header("Expires", "0");
  //res.header("Access-Control-Allow-Methods","POST");
  res.header("Server", 'fans_v1.0');
  res.header("X-Powered-By", 'fans_script_v1.0');


  next();
});
app.use(cookieParase());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
