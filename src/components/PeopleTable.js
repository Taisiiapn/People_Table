import React from 'react';
import { Person } from './Person';



export class PeopleTable extends React.Component {

  render() {
  const { people,
          sortingFunc,
          selectedPersonId,
          onChangeSelectedPersonId } = this.props;

    return (
      <table className="PeopleTable">
        <thead>
          <tr>
            <th onClick={() => sortingFunc('id')}>Id</th>
            <th onClick={() => sortingFunc('name')}>Name</th>
            <th onClick={() => sortingFunc('sex')}>Sex</th>
            <th onClick={() => sortingFunc('age')}>Age</th>
            <th onClick={() => sortingFunc('born')}>Born</th>
            <th onClick={() => sortingFunc('died')}>Died</th>
            <th>Mother</th>
            <th>Father</th>
            <th>Century</th>
            <th>Children</th>
          </tr>
        </thead>

        <tbody>
          {people.map(person => (

            <Person key={person.id}
                    person={person}
                    selectedPersonId={selectedPersonId}
                    onChangeSelectedPersonId={onChangeSelectedPersonId} />

          ))}
        </tbody>
      </table>
    )
  }
}
