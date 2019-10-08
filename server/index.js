'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require("./passport/config");


const router = require('./router');
const port = 4000;

app.use(cors({
  origin:['http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(router);
app.use(cookieParser());
app.use(session({secret : 'lolcats lollipops %%¬'}));
app.use(passport.initialize());
app.use(passport.session()); //this is creating req.user

app.listen(port, (err) => {
  if (err) console.log('Error connecting to the db', err);
  else console.log(`Server listening on port ${port}`);
});

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback

app.get('/me', function(req, res, next) {
  //get rid of console logs after testing
  console.log(req.cookies,'cookies')
  res.set('Access-Control-Allow-Credentials', 'true');
  let user = req.user || null;
  console.log(user, 'user')
  res.json({
    user
  })
 });

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('http://localhost:3000/UserHome');
  });

  //This may need to be changed in the api console
  app.listen(process.env.PORT||8888, function () {
    console.log('Express running on http://localhost:8888/auth/google');
  })
  
  module.exports = app;
  
