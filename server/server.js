var express = require('express'); 
require('./services/passport'); 
var authRoutes = require('./routes/authRoutes'); 

var app = express(); 
authRoutes(app); 

app.listen(3000, ()=> {
    console.log('server now running on port http://localhost:3000'); 
})