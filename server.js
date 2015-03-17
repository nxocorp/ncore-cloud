var express = require("express");
var mongoose = require("mongoose");
var projectModel = require("./models/project")

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));


// DATABASE Connection
app.get('/api/projects', function(req, res) {
    mongoose.model('project').find({}).exec(function(error, collection) {
        res.send(collection);
    })
});


// Catch all and send to index
app.get('*', function(req, res) { res.render('index'); });


// connect to local mongoDB database
// mongoose.connect('mongodb://localhost/ncore-local');
mongoose.connect('mongodb://cloud:cloud9test@ds061199.mongolab.com:61199/ncore-cloud');
var con = mongoose.connection;
con.once('open', function() { 
    console.log('connected to mongodb successfully!') 
});


// For use in localhost development env
// app.listen(3000);  
// For use in Cloud9 development env
app.listen(process.env.PORT, process.env.IP);  