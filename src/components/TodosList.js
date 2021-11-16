import React from 'react'
import TodoItem from "./TodoItem";

export class TodosList extends React.Component {
  render() {
    return (
      <ul>
      {this.props.todos.map(todo => (
        <TodoItem key={todo.id}
         todo={todo}
         handleChangeProps={this.props.handleChangeProps}
         deleteTodoProps={this.props.deleteTodoProps}
         editTodoProps={this.props.editTodoProps} 
         />
      ))}
    </ul>
    )
  }
}

export default TodosList

