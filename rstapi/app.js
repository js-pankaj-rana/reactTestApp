var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
Store = require('./model/stores')
Price = require('./model/prices')



app.use(bodyParser.json());
// connect to the mongo db

mongoose.connect('mongodb://localhost:27017/rnst', {
  useMongoClient: true,
  connectTimeoutMS: 1000
});

var db = mongoose.connection;

app.get('/', function(req, res) {
	res.send('Please use the path like i.e. /api/prices')
})



app.get('/api/stores', function(req, res) {
	Store.getStore(function(err, stores){
		if(err){
			throw err;
		}
		res.json(stores)
	})
})

app.post('/api/stores', function(req, res) {
	var store = req.body;
	Store.addStore(store, function(err, store){
		if(err){
			throw err;
		}
		res.json(store)
	})
})


app.get('/api/stores/:id', function(req, res) {
	Store.getStoreById(req.params.id, function( err, store){
		if(err){
			throw err;
		}
		res.json(store)
	})
})

app.put('/api/stores/:id', function(req, res) {
	var id = req.params.id;
	var store = req.body;
	Store.updateStore(id, store, {}, function(err, store){
		if(err){
			throw err;
		}
		res.json(store)
	})
})

app.delete('/api/stores/:id', function(req, res) {
	var id = req.params.id;
	Store.removeStore(id, function(err, store){
		if(err){
			throw err;
		}
		res.json(store)
	})
})


app.get('/api/prices', function(req, res) {
	Price.getPrice(function(err, prices){
		if(err){
			throw err;
		}
		res.json(prices)
		console.log("api working")
	})
})

app.get('/api/prices/:id', function(req, res) {
	Price.getPriceById(req.params.id, function( err, price){
		if(err){
			throw err;
		}
		res.json(price)
	})
})


app.post('/api/prices', function(req, res) {
	var price = req.body;
	Price.addPrice(price, function(err, price){
		if(err){
			throw err;
		}
		res.json(price)
	})
})


app.put('/api/prices/:id', function(req, res) {
	var id = req.params.id;
	var store = req.body;
	Price.updatePrice(id, store, {}, function(err, price){
		if(err){
			throw err;
		}
		res.json(price)
	})
})



app.delete('/api/prices/:id', function(req, res) {
	var id = req.params.id;
	Price.removePrice(id, function(err, price){
		if(err){
			throw err;
		}
		res.json(price)
	})
})

app.listen(3000);

console.log('Running on port no. 3000');