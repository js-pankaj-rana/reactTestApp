var mongoose = require('mongoose');


var storesSchema = mongoose.Schema({
	location: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	phone: [{
		moblie1: {
			type: String,
			required: true
		},
		moblie2: {
			type: String,
			default: '0000000000'
		},
		moblie3: {
			type: String,
			default: '0000000000'
		}
	}],
	createDate: {
		type: Date,
		default: Date.now
	}
})

var Store= module.exports = mongoose.model('Store', storesSchema);


//Find all locations of store

module.exports.getStore = function(callback, limit) {
	Store.find(callback).limit(limit);
} 


// Find the location store
module.exports.getStoreById = function(id, callback) {
	Store.findById(id, callback)
} 

// Add the location store
module.exports.addStore = function(store, callback) {
	Store.create(store, callback)
} 

// Update the location store
module.exports.updateStore = function(id, store, options, callback) {
	var query = {_id: id};
	var update = {
		location: store.location,
		city: store.city, 
		state: store.state,
		phone: store.phone
	}

	Store.findOneAndUpdate(query, update,  options, callback)
} 


// Delete the locations of Store
module.exports.removeStore = function(id, callback) {
	var query = {_id: id};
	Store.remove(query, callback)
} 
