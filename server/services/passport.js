var passport = require('passport'); 
var GoogleStrategy = require('passport-google-oauth20').Strategy; 
var keys  = require('../config/keys'); 

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'    
}, (accessToken, refreshToken, profile, done)=>{
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);
})); 