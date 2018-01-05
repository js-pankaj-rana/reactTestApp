var jwt = require('jsonwebtoken')

module.exports.authenticate = function (req, res) {
	var user = {
		name: 'pankaj',
		email: 'pankaj@gmail.com'
	}
	var token = jwt.sign(user, process.env.SECRET_KEY, {
		expiresIn: 4000
	});
	res.json({
		success: true,
		token: token
	})
}