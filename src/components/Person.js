import React from 'react';
import classnames from 'classnames';

export const Person = ({ person, selectedPersonId, onChangeSelectedPersonId }) => {

  const classes = classnames(
    'Person',
    {
    'PeopleTable__person--male': person.sex === 'm',
    'PeopleTable__person--female': person.sex === 'f',
    'PeopleTable__person--selected': selectedPersonId === person.id
    }
  )

  const classesForName = classnames({
    'PeopleTable__ageOver65': person.age >= 65,
    'PeopleTable__bornBefore1650': person.born < 1650,
    'PeopleTable__diedAfter1800': person.died > 1800,
    'PeopleTable__father': person.father
  })

  const childNames = person.children.map(childName => childName.name);

  return (
    <tr className = {classes}
      onClick={() => onChangeSelectedPersonId(person.id)}>
      <td>{person.id}</td>
      <td className={classesForName}>{person.name}</td>
      <td>{person.sex}</td>
      <td>{person.age}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>{person.mother}</td>
      <td>{person.father}</td>
      <td>{person.century}</td>
      <td>{childNames.join(', ')}</td>
    </tr>
  )
}
