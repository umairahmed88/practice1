import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.components'

import {SearchBox} from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
constructor() {
  super();

  this.state = {
    practices: [],
    searchField: ''
  };
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ practices: users }));
}

onSearchChange = e => {
  this.setState({searchField: e.target.value});
};

  render() {
    const { practices, searchField } = this.state;
    const filteredFileds = practices.filter(practice => 
      practice.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <CardList practices={filteredFileds} />
      </div>
    );
  }
}


export default App;