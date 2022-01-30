import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolver";

console.log("bsbo");
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers: resolvers,
});

server.start(() => console.log("Server is running"));
