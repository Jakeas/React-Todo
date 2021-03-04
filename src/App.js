import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const todos = [
  {
    task: 'Cook Dinner',
    id: 1,
    completed: false
  },
  {
    task: 'Finish Project',
    id: 2,
    completed: false
  },
  {
    task: 'Exercise',
    id: 3,
    completed: false
  },
  {
    task: 'Read',
    id: 4,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
      this.state= {
        todos
      }
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo={
      task: todo,
      id: this.state.id,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  toggleTodos = (todoId) => {
    console.log(todoId);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed:!todo.completed
          }
        }
        return todo
      })
    })
  }
  
  clearCompleted = (e) => {
    e.preventDefault()
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.completed)
    })
  }


  render() {
    return (
      <div className="App">
        <div className="header">
        <h1>Welcome to your Todo App!</h1>
        <TodoForm key={this.id} addTodo={this.addTodo}/> 
        </div>
        <TodoList 
          key={this.id}
          todos={this.state.todos}
          toggleItem={this.toggleTodos}
          clearCompleted={this.clearCompleted}  
        />
      </div>
    );
  }
}

export default App;
