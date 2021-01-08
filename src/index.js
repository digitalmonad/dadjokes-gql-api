const { ApolloServer, gql } = require("apollo-server");
const { Joke, sequelize } = require("../models");

const PORT = process.env.PORT || 4000;

const typeDefs = gql`
  type Joke {
    text: String
    id: ID!
  }

  type Query {
    joke: Joke
  }
`;

const resolvers = {
  Query: {
    joke: async (_, args) => {
      const joke = await Joke.findOne({
        order: sequelize.random(),
      });

      return joke;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen({ port: PORT }, () =>
  console.log(`Server running on port ${PORT}`)
);
