const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user.models');

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
  clientID: '646256247674-d9n3mur03uv7en2357l1gvtl24rqfiue.apps.googleusercontent.com',
  clientSecret: 'Eun13mMlsdIGGEcu1OH4rYdl',
  callbackURL: 'http://localhost:8888/auth/google/callback'
},
function (accessToken, refreshToken, profile, done) {
  done(null, profile);

  User.findOneAndUpdate(
    { googleId: profile.id },
    {
      googleId: profile.id,
      firstName:profile._json.given_name,
      lastName:profile._json.family_name,
    },
    { upsert: true, new: true },
    function (err, user) {
      return done(err, user);
    });
}
));

passport.serializeUser(function (user, done) {
  done(null, user);
});  

passport.deserializeUser(function(user, done) {
  done(null, user);
  //Miguels code below. He says we might not want this in the future. Because we are overriding the google.id with the mongo.id which can potentially cause problems later on. 
  // User.findOne({ googleId: user.id }, (err, dbuser) => {
  //   done(null, dbuser)
  // })
});

module.exports = passport;


