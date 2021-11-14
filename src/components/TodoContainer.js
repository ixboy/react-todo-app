import Header from "./Header"
import InputTodo from "./InputTodo";
import React from "react"
import TodosList from "./TodosList";
class TodoContainer extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
  };

  delTodo = id => {
    this.setState({ 
      todos: [...this.state.todos.filter(todo => { return todo.id !== id; })] });
  };

  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }))
    // console.log("clicked", id);
  };

  render() {
    return (
      <div>
        <Header />
        <InputTodo />       
        <TodosList
          deleteTodoProps={this.delTodo}
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
        />
      </div>
    )
  }
}
export default TodoContainer