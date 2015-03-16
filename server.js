var express = require("express");

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

// Used to server all public static files
app.use(express.static(__dirname + '/public'));

// Catch all and send to index
app.get('*', function(req, res) { res.render('index'); });

// For use in localhost development env
// app.listen(3000);  
// For use in Cloud9 development env
app.listen(process.env.PORT, process.env.IP);  