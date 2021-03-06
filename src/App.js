import React from 'react';
import './App.css';
import { PeopleTable } from './components/PeopleTable';
import peopleArr from './api/getPeople';

class App extends React.Component {
  people = [];

  state = {
    visiblePeople: [],
    sortedField: '',
    selectedPersonId: null,
    inputValue: ''
  }

  async componentDidMount() {
    this.people = await peopleArr();

    this.setState({
      visiblePeople: this.people
    });
  }

  getSortedPeople = (people, sortBy, inputValue) => {
    const preparedInputValue = inputValue.toLowerCase();
    return [...people]

      .filter(person => person.name.toLowerCase().includes(preparedInputValue)
      || person.mother.toLowerCase().includes(preparedInputValue)
      || person.father.toLowerCase().includes(preparedInputValue)
      || person.children.toLowerCase().includes(preparedInputValue))

      .sort((a, b) => {
        switch (typeof a[sortBy]) {
          case 'string':
            return a[sortBy].localeCompare(b[sortBy]);

          case 'boolean' && 'number':
            return a[sortBy] - b[sortBy];

          default:
            return 0;
        }
      });
  }

  sortingFunc = (sortBy) => {
    this.setState(() => ({
      sortedField: sortBy,
      visiblePeople: this.getSortedPeople(this.people, sortBy, this.state.inputValue)
    }));
  }

  handleChangeInput = (event) => {
    const inputValue = event.target.value;
    this.setState(({ sortBy }) => ({
      inputValue,
      visiblePeople: this.getSortedPeople(this.people, sortBy, inputValue)
    }))
  }

  onChangeSelectedPersonId = (personId) => {
    this.setState({selectedPersonId: personId})
  }

  render() {
    const { visiblePeople, inputValue, selectedPersonId } = this.state;

    return (
      <div className="App">
        <h1>People table</h1>

        <input type="text"
          className="filteringInput"
          value={inputValue}
          onChange={this.handleChangeInput} />

        <PeopleTable people={visiblePeople}
                    sortingFunc={this.sortingFunc}
                    selectedPersonId={selectedPersonId}
                    onChangeSelectedPersonId={this.onChangeSelectedPersonId} />

      </div>
    )
  }
};

export default App;
