const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server-lambda');
const typeDefs = require('./type-defs');
const resolvers = require('./resolvers');
 

 
const server = new ApolloServer({
  typeDefs, 
  resolvers,
  tracing: true,
  playground: true,
  cacheControl: false
});
 
exports.graphql = server.createHandler();
