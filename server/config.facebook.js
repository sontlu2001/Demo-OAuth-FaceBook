require('dotenv').config();
const passport = require('passport')

const FacebookStrategy = require('passport-facebook').Strategy;

const configLoginWithFacebook = () => {
  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_APP_REDIRECT 
  },
  async function (accessToken, refreshToken, profile, callback){
    console.log(profile);
  }
))
}

module.exports = configLoginWithFacebook;