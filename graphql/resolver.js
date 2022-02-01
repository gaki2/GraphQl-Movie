// DB
//스키마 : 값들이 어떤 타입과 형식을 갖는지 미리 틀을 정해두는 역할
const people = [
  {
    id: 1,
    name: "gak",
    age: 23,
    gender: "man",
  },
  {
    id: 2,
    name: "hyeon",
    age: 24,
    gender: "female",
  },
  {
    id: 3,
    name: "minji",
    age: 25,
    gender: "female",
  },
];

const getById = (id) => {
  const filtered = people.filter((person) => person.id === id);
  return filtered[0];
};

// 쿼리 요청을 받았을 때, 어떤 데이터를 리턴하는지 정하는 역할
const resolvers = {
  Query: {
    person: () => people,
    getById: (_, { id }) => getById(id),
  },
};

export default resolvers;
