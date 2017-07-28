var express = require('express'); 
var passport = require('passport'); 
var GoogleStrategy = require('passport-google-oauth20').Strategy; 
var keys  = require('./config/keys'); 

var app = express(); 
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'    
}, (accessToken, refreshToken, profile, done)=>{
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);
})); 

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
})); 

app.get('/auth/google/callback', passport.authenticate('google'));


app.listen(3000, ()=> {
    console.log('server now running on port http://localhost:3000'); 
})