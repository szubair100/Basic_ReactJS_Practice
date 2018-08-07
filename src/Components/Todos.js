import React, { Component } from 'react';
import TodoItem from './TodoItem';


class Todos extends Component {
    // deleteTodo(id){
    //     this.props.onDelete(id)
    // }
    render() {
        let todoItems;
        if(this.props.todos){
            todoItems = this.props.todos.map(todo => {
                //console.log(todo);
                return (
                    //onDelete={this.deleteTodo.bind(this)} to add delete for todo
                    <TodoItem key={todo.title} todo={todo} />
                );
            });
        }
        return (
        <div className="Todos">
            <h3>Todo List</h3>
            {todoItems}
        </div>
        );
    }
}


export default Todos;
