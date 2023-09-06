const { ApolloServer } = require('@apollo/server');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('@apollo/server-plugin-landing-page-graphql-playground');
const { expressMiddleware } = require('@apollo/server/express4');
const { loadFiles } = require('@graphql-tools/load-files');
const { buildContext } = require('graphql-passport');
const resolvers = require('./resolvers');

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles('src/graphql/**/*.graphql'),
    resolvers: resolvers,
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
