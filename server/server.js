// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");


var session = require('express-session');
// create the express app
var app = express();

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

var bodyParser = require('body-parser');

require('./config/mongoose.js')

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes_db',{useMongoClient:true});
mongoose.Promise = global.Promise;

//var QuoteSchema = new mongoose.Schema({
	//user: String,
//})
//mongoose.model('Quote', QuoteSchema);
//var Quote = mongoose.model('Quote')


app.use(session({
	secret: 'wowowowowowowowowowow',
	resave: false,
	saveUninitialized: true
}));
// use it!
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// static content
//app.use(express.static(path.join(__dirname, "./public/dist")));
//app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(path.join(__dirname, "../client/dist")));
// setting up ejs and our views folder
//app.set('views', path.join(__dirname, './client/views'));
//app.set('view engine', 'ejs');
// root route to render the index.ejs view


var viewpaths = require('./config/viewpaths.js');
viewpaths(app);
//app.get('/', function(req,res){
	//res.render('index')
//})
// post route for adding a user
// tell the express app to listen on port 8000
