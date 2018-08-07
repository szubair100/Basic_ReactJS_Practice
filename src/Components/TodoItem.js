import React, { Component } from 'react';

class TodoItem extends Component {
    // deleteTodo(id){
    //     this.props.onDelete(id);
    // }
  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.userId}</strong>: {this.props.todo.title}
        {/* onClick={this.deleteTodo.bind(this, this.props.todo.id)} to delete todo with
        <a href="#" >X</a> */}
      </li>
    );
  }
}


export default TodoItem;
