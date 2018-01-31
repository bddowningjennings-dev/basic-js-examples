import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  componentWillMount() {
    // fetch('/api/todos')
    fetch('https://wax-wrist.glitch.me/dreams')
    .then(res => res.json())
    .then(todos => this.setState({todos}))
  }
  render() {
    const todos = this.state.todos.map((t, i) => 
      (<p key= {i}> 
          {t}
        {/* {t.name} - {t.completed ? 'true': 'false'} */}
      </p>)) 
    return (
      <div>
        <p>listsss</p>
        {todos}
      </div>
    );
  }
};

export default TodoList;