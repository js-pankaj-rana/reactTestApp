Price = require('../model/prices')


module.exports.getPrice = function(req, res) {
	Price.getPrice(function(err, prices){
		if(err){
			throw err;
		}
		res.json(prices)
		console.log("getting price")
	})
}


module.exports.getSinglePrice = function(req, res) {
	Price.getPriceById(req.params.id, function( err, price){
		if(err){
			throw err;
		}
		res.json(price)
	})
}


module.exports.postPrice = function(req, res) {
	var price = req.body;
	Price.addPrice(price, function(err, price){
		if(err){
			throw err;
		}
		res.json(price)
	})
}



module.exports.updatePrice =  function(req, res) {
	var id = req.params.id;
	var store = req.body;
	Price.updatePrice(id, store, {}, function(err, price){
		if(err){
			throw err;
		}
		res.json(price)
	})
}

module.exports.deletePrice =  function(req, res) {
	var id = req.params.id;
	Price.removePrice(id, function(err, price){
		if(err){
			throw err;
		}
		res.json(price)
	})
}