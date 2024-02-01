var express = require('express');
var router = express.Router();
var {userModel} = require("../Db_Connect")
var {typeDefs} = require("../schema/type-defs")
var {resolvers} = require("../schema/resolvers")
const {ApolloServer} = require("apollo-server")


const server = new ApolloServer({
  typeDefs, resolvers
});

server.listen().then(({url})=>{
  console.log("Server is Running at:",url);
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/createNewUser", async function(req, res){
  const formData = req.body;
  console.log(formData); 
  const createdUser = await userModel.create({

  })
})

module.exports = router;
