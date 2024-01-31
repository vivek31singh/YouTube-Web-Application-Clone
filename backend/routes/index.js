var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hello world");
  res.send("Hello, World!"); // Send a simple response back to the client
});

module.exports = router;
