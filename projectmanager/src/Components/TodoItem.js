import React, { Component } from 'react';

class TodoItem extends Component {
  render(){
    return (
      <ul className="Todo">
        <li>{this.props.todo.title}</li>
      </ul>
    )
  }
}

export default TodoItem;
