const getPeople = () => fetch('https://mate-academy.github.io/react_people-table/api/people.json')
  .then(data => data.json());

const peopleArr = async() => {
  const people = await getPeople()

  return people.map((person, id) => ({
    id: id + 1,
    ...person,
    age: person.died - person.born,
    mother: person.mother ? person.mother : '-',
    father: person.father ? person.father : '-',
    century: Math.ceil(person.died / 100),
    children: people.filter(
      child => child.mother === person.name ||
               child.father === person.name)
  }));

};
export default peopleArr;
