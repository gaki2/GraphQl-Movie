const nicolas = {
  name: "Nico",
  age: 19,
  gender: "man",
};

const resolvers = {
  Query: {
    person: () => nicolas,
  },
};

export default resolvers;
