const {gql} = require('apollo-server');

const typeDefs = gql`

type User{
id: ID!
email: String!,
phoneNumber: Int!,
password: String!,
firstName: String!,
lastName: String!,
dob:String!,
gender: String!,
}

type Query {
    users : [User!]!
}

input createUserInput {
    email: String!,
phoneNumber: Int!,
password: String!,
firstName: String!,
lastName: String!,
dob:String!,
gender: String!,
}

type Mutation{
createUser(input: createUserInput!): User!
}
`;

module.exports = { typeDefs: typeDefs}