import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    let todoItems;
    if(this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return (
          <TodoItem todo={todo} key={todo.title}></TodoItem>
        )
      })
    }

    return (
      <div>
        <h3>Todos</h3>
        {todoItems}
      </div>
    )
  }
}

export default Todos;
