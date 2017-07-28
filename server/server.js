var express = require('express'); 
require('./services/passport'); 


var app = express(); 
require('./routes/authRoutes')(app); 

app.listen(3000, ()=> {
    console.log('server now running on port http://localhost:3000'); 
})