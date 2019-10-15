'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('./passport/config');

// our 'normal' server
const router = require('./router');
const port = 4000;


app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(router);
app.use(cookieParser());
app.use(session({
  secret: 'lolcats lollipops %%¬',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); //this is creating req.user

app.listen(port, (err) => {
  if (err) console.log('Error connecting to the db', err);
  else console.log(`Server listening on port ${port}`);
});

// our socket.io server: (we are creating a socket middleware)
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const socketPort = process.env.IO_PORT || 4001;

//Setting up a socket with the namespace "connection" for new sockets
io.on('connection', socket => {
  console.log('New client connected');
  global.socket = socket;

  //A special namespace "disconnect" for when a client disconnects
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// socket server:
server.listen(socketPort, () => {
  console.log(`Listening to socket on port ${socketPort}`);
});


// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback

app.get('/me', function (req, res, next) {
  //get rid of console logs after testing
  res.set('Access-Control-Allow-Credentials', 'true');
  // console.log('-----------------',req.user,);

  let user = req.user || null;
  res.json({
    user
  });
});

app.get(
  '/auth/google',
  (req, res, next) => {
    req.session.usertype = req.query.usertype;
    // console.log('req.query: ', req.query);
    next();
  },
  passport.authenticate('google', { scope: ['profile'] }),
);

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // console.log('usertype: ', req.session.usertype);
    const usertype = req.session.usertype;
    const route = {
      customer: 'UserHome',
      restaurant: 'RestoHome'
    };
    res.redirect(`http://localhost:3000/${route[usertype]}`);
  });

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('http://localhost:3000');
});

//This may need to be changed in the api console
app.listen(process.env.PORT || 8888, function () {
  console.log('Express running on http://localhost:8888/auth/google');
});

module.exports = app;


