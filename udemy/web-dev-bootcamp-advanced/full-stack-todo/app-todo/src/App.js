import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>todo app</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
