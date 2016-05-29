var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var api = require('./routes/api');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', api);
// serve the angular-app
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// catch 404 and send back to index.html 
// (technically this should never run since all will be caught above)
app.use(function(req, res, next) {
  console.log('Not found?');
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('error:' + err.message);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('error:' + err.message);
});


module.exports = app;
