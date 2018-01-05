var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var authenticateController = require('./controllers/authentication.controller');
var priceController = require('./controllers/price.controller');
var storeController = require('./controllers/store.controller');

var secureRouter = express.Router();

app.use(bodyParser.json());
// connect to the mongo db

process.env.SECRET_KEY = "mysecretkey";



mongoose.connect('mongodb://localhost:27017/rnst', {
  useMongoClient: true,
  connectTimeoutMS: 1000
});


//security for api routes

secureRouter.use(function(req, res, next){
	var token = req.body.token || req.headers['token'];
	if(token){
		res.send("Token is validated")
	} else{
		res.send("Token is invalid")	
	}

})

var db = mongoose.connection;

app.use('api/secure-api', secureRouter);

app.get('/', function(req, res) {
	res.send('Please use the path like i.e. /api/prices')
})



app.get('/api/authenticate', authenticateController.authenticate);


app.get('/api/stores', storeController.getStore);
app.post('/api/stores', storeController.postStore);
app.get('/api/stores/:id', storeController.getSingleStore);
app.put('/api/stores/:id', storeController.updateStore);
app.delete('/api/stores/:id', storeController.deleteStore);

app.get('/api/prices', priceController.getPrice);
app.get('/api/prices/:id', priceController.getSinglePrice);
app.post('/api/prices', priceController.postPrice);
app.put('/api/prices/:id', priceController.updatePrice);
app.delete('/api/prices/:id', priceController.deletePrice);

app.listen(3000);

console.log('Running on port no. 3000....');