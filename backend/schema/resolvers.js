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
console.log(user);
      const createdUser = await userModel.create(user);
      console.log(createdUser);
      return createdUser;
    },
  },
};

module.exports = { resolvers: resolvers };
