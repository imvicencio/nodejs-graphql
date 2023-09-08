const { ApolloServer } = require('@apollo/server');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('@apollo/server-plugin-landing-page-graphql-playground');
const { expressMiddleware } = require('@apollo/server/express4');
const { loadFiles } = require('@graphql-tools/load-files');
const { buildContext } = require('graphql-passport');

const {
  typeDefs: scalarTypeDefs,
  resolvers: scalarsResolvers,
} = require('graphql-scalars');

const resolvers = require('./resolvers');

const useGraphql = async (app) => {
  const typeDefs = [
    scalarTypeDefs,
    ...(await loadFiles('src/graphql/**/*.graphql')),
  ];

  const resolversArray = [scalarsResolvers, resolvers];

  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolversArray,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  await server.start();

  app.use(
    expressMiddleware(server, {
      context: async ({ req, res }) => buildContext({ req, res }),
    })
  );
};

module.exports = {
  useGraphql,
};
