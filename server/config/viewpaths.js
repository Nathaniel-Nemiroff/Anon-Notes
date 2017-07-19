const path = require('path')
var gen = require('../controllers/Gen.js');
module.exports = function(app){
	/*app.get('/', function(req, res){
		res.render('index')
		//gen.read(req, res);
	})*/
	app.post('/create', (req,res)=>{
		gen.create(req,res);})
	app.get('/readall', (req,res)=>{gen.readall(req,res);})

	app.get('*', (req, res) => {
		res.sendFile(path.resolve('../client/dist/index.html'))
	})
}
