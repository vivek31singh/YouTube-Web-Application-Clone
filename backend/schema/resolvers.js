var {} = require("apollo-server");
var { userModel } = require("../Db_Connect");
const resolvers = {
  Query: {
    users: async () => {
      const AllUsers = await userModel.find();
      console.log(AllUsers);

      return AllUsers;
    },
  },

  Mutation: {
    // creating a new User

    createUser: async (parent, args) => {
      const user = args.input;

      const createdUser = await userModel.create(user);
      return createdUser;
    },
  },
};

module.exports = { resolvers: resolvers };
