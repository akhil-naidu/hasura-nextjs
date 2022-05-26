// Packages to download apollo-server-micro, micro

import { ApolloServer, gql } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import admin from '@/utils/firebaseAdmin';

const typeDefs = gql`
  type UserProfile {
    id: String
    email: String
    displayName: String
  }

  type Query {
    firebase_user_profile(id: String): UserProfile
  }
`;

const resolvers = {
  Query: {
    firebase_user_profile: async (_, args) => {
      if (!args.id) return null;
      const { uid, email, displayName } = await admin.auth().getUser(args.id);
      return {
        id: uid,
        email,
        displayName,
      };
    },
  },
};

let server;
if (process.env.NODE_ENV !== 'production') {
  server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
} else {
  server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
  });
}

const startServer = server.start();

const handler = async (req, res) => {
  await startServer;
  await server.createHandler({
    path: '/api/graphql',
  })(req, res);
};

export default handler;

// Since this route is a graphql request, I don't want NextJS trying to parse the body of this API
export const config = {
  api: {
    bodyParser: false,
  },
};
