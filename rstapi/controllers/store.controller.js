Store = require('../model/stores')


module.exports.getStore = function(req, res) {
	Store.getStore(function(err, stores){
		if(err){
			throw err;
		}
		res.json(stores)
	})
}

module.exports.postStore = function(req, res) {
	var store = req.body;
	Store.addStore(store, function(err, store){
		if(err){
			throw err;
		}
		res.json(store)
	})
}


module.exports.getSingleStore = function(req, res) {
	Store.getStoreById(req.params.id, function( err, store){
		if(err){
			throw err;
		}
		res.json(store)
	})
}


module.exports.updateStore = function(req, res) {
	var id = req.params.id;
	var store = req.body;
	Store.updateStore(id, store, {}, function(err, store){
		if(err){
			throw err;
		}
		res.json(store)
	})
}

module.exports.deleteStore = function(req, res) {
	var id = req.params.id;
	Store.removeStore(id, function(err, store){
		if(err){
			throw err;
		}
		res.json(store)
	})
}