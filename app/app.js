var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const routesWithNoAuth = require('./routes/routesWithNoAuth');
const routesWithAuth = require('./routes/routesWithAuth');
const {responseData} = require('./utilities/responseData')

const mongoose = require('mongoose');
const cors = require('cors');
const jwtMiddleware = require('express-jwt')

const {connectionString, SECRET_TOKEN} = require("./config")
const {getTokenFromHeader} = require('./controller/auth')
const statusCode = require('./constant/statusCode')

mongoose.connect(connectionString, {useNewUrlParser: true})
.then(res => {
  console.log("Connect to DB successfully!")
})
.catch(err => {
  console.log("Failed to connect to DB!")
})

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// For each request, provide wildcard Access-Control-* headers via OPTIONS call
app.use(cors()); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Dont with Authenticate
app.use('/', routesWithNoAuth);

// Middleware Auth
app.use(jwtMiddleware({
    secret: SECRET_TOKEN, // Use the same token that we used to sign the JWT above
    // Let's allow our clients to provide the token in a variety of ways
    getToken: getTokenFromHeader,
    //resultProperty: 'user'
}));

// With Authenticate
app.use('/', routesWithAuth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    // res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    
    let endMessage = statusCode[err.status] || "Unknown error"

    res.end(responseData(res, {}, err.status, {error: endMessage}));
});

module.exports = app;
