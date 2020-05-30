import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.components'

import './App.css';

class App extends Component {
constructor() {
  super();

  this.state = {
    practices: []
  };
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ practices: users }));
}

  render() {
    return (
      <div className="App">
        <CardList practices={this.state.practices} />
      </div>
    );
  }
}


export default App;
