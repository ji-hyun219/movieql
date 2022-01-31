export const people = [
  {
    id: "0",
    name: "one",
    age: 20,
    gender: "male",
  },
  {
    id: "1",
    name: "two",
    age: 21,
    gender: "female",
  },
  {
    id: "2",
    name: "three",
    age: 22,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
