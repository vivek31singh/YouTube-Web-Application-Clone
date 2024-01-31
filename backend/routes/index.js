var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hello world");
  res.send("Hello, World!"); // Send a simple response back to the client
});

module.exports = router;

var {userModel} = require("../Db_Connect");

/* GET home page. */
router.get('/', async function(req, res) {
  console.log("hello world");

const userData = await userModel.find()
  res.send(userData); // Send a simple response back to the client
});

module.exports = router;

