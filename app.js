if (process.env.NODE_ENV !== 'production' && !process.env.IS_BUILD) {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const index = require('./routes/index');
const users = require('./routes/users');
const chat = require('./routes/chat');
const session = require('./routes/session');
const connections = require('./routes/connections');
const methodOverride = require('method-override')
const app = express();
// const friends = require('./routes/friends');
// const http = require('http').Server(app);

app.disable('x-powered-by');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/shared');

app.enable('trust proxy');
app.use(methodOverride('_method'))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
  name: 'devconnect',
  secret: process.env.SESSION_SECRET,
  secure: app.get('env') === 'production'
}));

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use((req, res, next) => {
  if (req.session.userId) res.locals.user = req.session
  next()
})
app.use('/', index);
app.use('/users', users);
app.use('/session', session);
app.use('/chat', chat);
app.use('/connections', connections)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
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
