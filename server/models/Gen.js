var mongoose = require('mongoose');

var genSchema = new mongoose.Schema({
	note:String,
},{timestamps:true})

var Gen = mongoose.model('Gen', genSchema);
