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
            <th><button onClick={() => sortingFunc('id')}>Id</button></th>
            <th><button onClick={() => sortingFunc('name')}>Name</button></th>
            <th><button onClick={() => sortingFunc('sex')}>Sex</button></th>
            <th><button onClick={() => sortingFunc('age')}>Age</button></th>
            <th><button onClick={() => sortingFunc('born')}>Born</button></th>
            <th><button onClick={() => sortingFunc('died')}>Died</button></th>
            <th><button onClick={() => sortingFunc('mother')}>Mother</button></th>
            <th><button onClick={() => sortingFunc('father')}>Father</button></th>
            <th><button onClick={() => sortingFunc('century')}>Century</button></th>
            <th><button onClick={() => sortingFunc('children')}>Children</button></th>
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
