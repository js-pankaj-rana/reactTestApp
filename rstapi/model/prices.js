var mongoose = require('mongoose');

var pricesSchema = mongoose.Schema({
	ptype: {
		type: String,
		required: true
	},
	pprice: {
		type: String,
		required: true
	},
	pdelCharge: {
		type: String,
		required: true
	},
	createDate: {
		type: Date,
		default: Date.now
	}
})

var Price = module.exports = mongoose.model('Price', pricesSchema);


//get all product price

module.exports.getPrice = function(callback, limit){
	Price.find(callback).limit(limit);
} 

//get single product price
module.exports.getPriceById = function(id, callback) {
	Price.findById(id, callback)
} 

// Add product Price
module.exports.addPrice = function(store, callback) {
	Price.create(store, callback)
} 


// Update product Price
module.exports.updatePrice = function(id, price, options, callback) {
	var query = {_id: id};
	var update = {
		ptype: price.ptype,
		pprice: price.pprice, 
		pdelCharge: price.pdelCharge
	}
	Price.findOneAndUpdate(query, update,  options, callback)
} 

// Delete the product Price
module.exports.removePrice = function(id, callback) {
	var query = {_id: id};
	Price.remove(query, callback)
} 
