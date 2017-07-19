var mongoose = require('mongoose');
var Gen = mongoose.model('Gen');
module.exports = {
	create:(req,res)=>{
		var gen = new Gen(req.body)
		gen.save((err,data)=>{
			if(err)res.json(false);
			else res.json(true);})
	},
	readall:(req,res)=>{
		Gen.find({}, (err, data)=>{
			if(err)res.json(err)
			else res.json(data)
		})
	}
}
