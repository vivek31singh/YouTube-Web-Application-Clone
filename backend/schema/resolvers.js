var { } = require("apollo-server");
var {userModel} = require("../Db_Connect")
const resolvers = {
    Query: {
        users: async ()=>{
const AllUsers = await userModel.find({})
return AllUsers;
        }
    }
}