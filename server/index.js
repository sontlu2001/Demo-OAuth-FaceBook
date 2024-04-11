
const express = require('express')
const bodyParser = require("body-parser");
const session = require('express-session');
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config()


const port = 4000
const app = express();

app.use(session({
  secret: 'dsadads',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(bodyParser.json());
// app.use(passport.session());

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: process.env.FACEBOOK_APP_REDIRECT,
  profileFields: ['id', 'emails', 'name', 'displayName']

},
  function (accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }));
  
// Initialize Passport and restore authentication state, if any, from the session.
app.use(passport.initialize());

// Passport session setup.
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

app.get('/auth/facebook', passport.authenticate('fa cebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log(req.user);
    res.redirect('http://localhost:3000');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
