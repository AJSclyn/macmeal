// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var userController = require('./controllers/user');
var passport = require('passport');
var authController = require('./controllers/auth');

//Adding routes for users.js
var routes = require('./routes/index');
var users = require('./models/user');

// Connect to the macmeal
mongoose.createConnection('mongodb://localhost:27017/macmeal');

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Create our Express application
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Use the passport package in our application
app.use(passport.initialize());

// Create our Express router
var router = express.Router();
app.use('/', routes);

app.get('/', function(req, res) {
  res.send('Hello World!'); // load the single view file (angular will handle the page changes on the front-end)
});

// Create endpoint handlers for /users
router.route('/users')
  .post(userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);

// Connect to the userlocker MongoDB
mongoose.connect('mongodb://localhost:27017/macmeal');

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(3000);
console.log("Listening on port: " + port)
