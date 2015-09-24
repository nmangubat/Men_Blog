//MODEL

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticlesSchema = new Schema ({
	title: String,
	author: String,
	created_at: Date,
	votes: {type:Number, default:0},
	content: String
})

// defienes prehook
// before each save the created_at value will be set

ArticlesSchema.pre("save", function(next){
	this.created_at = new Date();
	next();

});